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
      rate: 0.9,
      pitch: 1.05,
      volume: 1.0,
    };
  }

  /**
   * Prioritize high-quality voices
   */
  getBestVoice(lang) {
    const voices = this.synth.getVoices();
    const langPrefix = lang.toLowerCase() === 'et' ? 'et' : 'en';
    const langVoices = voices.filter(v => v.lang.toLowerCase().startsWith(langPrefix));

    if (langVoices.length === 0) return null;

    // Preference mapping (descending priority)
    // We prioritize "Natural" and "Premium" which are usually neural-based
    // For Estonian, we specifically look for Mari, Meelis, or Heidi if available
    const keywords = ['Natural', 'Premium', 'Enhanced', 'Mari', 'Meelis', 'Heidi', 'Google', 'Siri', 'Apple', 'Samantha', 'Daniel'];
    
    for (const kw of keywords) {
      const match = langVoices.find(v => v.name.includes(kw));
      if (match) return match;
    }

    return langVoices[0];
  }

  /**
   * Speak a collection of text segments
   * @param {string[]} segments 
   * @param {string} lang ('ET' or 'EN')
   * @param {function} onEnd
   */
  speak(segments, lang, onEnd) {
    // Force immediate stop and cleanup of any existing speech sequence
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
    
    // Voice selection
    const voice = this.getBestVoice(this.lang);
    if (voice) utterance.voice = voice;

    utterance.lang = this.lang === 'ET' ? 'et-EE' : 'en-US';
    
    // Dynamic rate/pitch adjustment for naturalness
    if (this.lang === 'ET') {
      utterance.rate = 0.86; // Slightly slower for better phonetics
      utterance.pitch = 1.08; // Slightly higher for more human tone
    } else {
      utterance.rate = 0.94;
      utterance.pitch = 1.0;
    }
    
    utterance.volume = this.options.volume;

    // GC Protection
    this.currentUtterance = utterance;

    utterance.onend = () => {
      if (this.isPlaying) {
        const pauseDuration = text.length < 40 ? 500 : 250;
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
