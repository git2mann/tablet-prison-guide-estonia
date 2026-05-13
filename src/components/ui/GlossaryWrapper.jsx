import React from 'react';
import Keyword from './keyword';
import KW from '../../constants/keywords';

/**
 * GlossaryWrapper scans text for glossary terms and wraps them in <Keyword />
 * It handles both ET and EN terms based on the keys in keywords.js
 */
export default function GlossaryWrapper({ children, language = 'ET' }) {
  if (typeof children !== 'string') return <>{children}</>;

  // Sort keys by length descending to match longest terms first (e.g., "personal account" before "account")
  const sortedTerms = Object.keys(KW).sort((a, b) => b.length - a.length);
  
  // Create a regex that matches any of the terms as whole words
  // We use \b for word boundaries, but need to handle potential special characters in terms
  const escapedTerms = sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');

  const parts = children.split(regex);
  
  return (
    <>
      {parts.map((part, i) => {
        // Every second part is a match
        if (i % 2 === 1) {
          // Find the original key that matches (case-insensitive)
          const matchedKey = sortedTerms.find(t => t.toLowerCase() === part.toLowerCase());
          return <Keyword key={i} word={matchedKey} language={language}>{part}</Keyword>;
        }
        return part;
      })}
    </>
  );
}
