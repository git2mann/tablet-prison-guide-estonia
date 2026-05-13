/**
 * SpeechService provides a high-fidelity wrapper around window.speechSynthesis
 * Features:
 * - Segment-based queuing (prevents hangs)
 * - Premium voice selection
 * - Natural pauses between headers/content
 * - Robust error handling & GC protection
 */
class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis;
    this.queue = [];
    this.currentUtterance = null;
    this.isPlaying = false;
    this.onEndCallback = null;
    this.options = {
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
    };
    this.voices = [];
    
    // Crucial: getVoices() is async-populated
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => {
        this.voices = this.synth.getVoices();
      };
    }
    this.voices = this.synth.getVoices();
  }

  /**
   * Prioritize high-quality neural/online voices
   */
  getBestVoice(lang) {
    const voices = this.synth.getVoices();
    const langPrefix = lang.toLowerCase() === 'et' ? 'et' : 'en';
    const langVoices = voices.filter(v => v.lang.toLowerCase().startsWith(langPrefix));

    if (langVoices.length === 0) return null;

    // Preference mapping (descending priority)
    // "Online" voices in Chrome/Edge are neural and sound significantly better (Siri-like)
    const keywords = [
      'Online',     // Chrome/Edge neural voices
      'Neural',     // Windows/Azure neural voices
      'Natural',    // Apple natural voices
      'Premium',    // High-quality local voices
      'Google',     // Google's better web voices
      'Siri', 
      'Apple', 
      'Samantha', 
      'Daniel',
      'Mari',       // Best Estonian female
      'Meelis',     // Best Estonian male
      'Heidi'
    ];
    
    // Sort available voices by their match in our priority list
    const sorted = [...langVoices].sort((a, b) => {
      const aScore = keywords.findIndex(kw => a.name.includes(kw));
      const bScore = keywords.findIndex(kw => b.name.includes(kw));
      
      // If keyword found (index >= 0), lower index is better
      const aVal = aScore === -1 ? 999 : aScore;
      const bVal = bScore === -1 ? 999 : bScore;
      
      return aVal - bVal;
    });

    return sorted[0];
  }

  /**
   * Speak a collection of text segments
   */
  speak(segments, lang, onEnd) {
    this.stop();
    
    this.isPlaying = true;
    this.onEndCallback = onEnd;
    this.queue = segments.filter(s => s && s.trim().length > 0);
    this.lang = lang;
    
    this._processQueue();
  }

  _processQueue() {
    if (!this.isPlaying || this.queue.length === 0) {
      this.isPlaying = false;
      if (this.onEndCallback) this.onEndCallback();
      return;
    }

    const text = this.queue.shift();
    const utterance = new SpeechSynthesisUtterance(text);
    
    const voice = this.getBestVoice(this.lang);
    if (voice) {
      utterance.voice = voice;
      // console.log(`Using voice: ${voice.name} (${voice.lang})`);
    }

    utterance.lang = this.lang === 'ET' ? 'et-EE' : 'en-US';
    
    // Refined naturalness parameters
    if (this.lang === 'ET') {
      // Estonian sounds better slightly slower and with a tiny bit of pitch lift
      utterance.rate = 0.88; 
      utterance.pitch = 1.05;
    } else {
      // English online voices are already very good at 1.0/1.0
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
    }
    
    utterance.volume = this.options.volume;

    this.currentUtterance = utterance;

    utterance.onend = () => {
      if (this.isPlaying) {
        // Human-like pause between sentences/paragraphs
        const pauseDuration = text.length < 50 ? 600 : 350;
        this.pauseTimeout = setTimeout(() => this._processQueue(), pauseDuration);
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'interrupted') {
        console.error('SpeechService Error:', e);
        this.stop();
      }
    };

    this.synth.speak(utterance);
  }

  stop() {
    this.isPlaying = false;
    this.queue = [];
    if (this.pauseTimeout) clearTimeout(this.pauseTimeout);
    this.synth.cancel();
    this.currentUtterance = null;
  }
}

export const speechService = new SpeechService();
