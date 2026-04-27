import React from 'react';
import ArticleFallback from "../pages/special/article_fallback";

// MAGIC: Automatically import all .jsx files in the src/pages/ directory
const PAGE_MODULES = import.meta.glob('../pages/**/*.jsx', { eager: true });

const PAGES = {};
Object.entries(PAGE_MODULES).forEach(([path, module]) => {
  let id = path.replace('../pages/', '').replace('.jsx', '');
  // Convert path to dot notation (e.g. 'arrival/search' -> 'arrival.search')
  id = id.toLowerCase().replace(/\//g, '.');
  // Remove the 'special.' prefix for standard usage
  id = id.replace('special.', '');
  PAGES[id] = module.default;
});

// Explicitly register specific special pages if naming doesn't match
if (PAGES['landingpage']) PAGES['landing'] = PAGES['landingpage'];

export default function Router({ page, onNav, language = 'ET', handleBack, isDarkMode }) {
  // 1. Get component from the dynamic mapping
  const Pg = PAGES[page];
  
  // 2. Special case: If page starts with 'category.', use the category component
  if (page.startsWith('category.')) {
    const CategoryPg = PAGES['category'];
    const categoryId = page.replace('category.', '');
    return <CategoryPg categoryId={categoryId} onNav={onNav} language={language} handleBack={handleBack} isDarkMode={isDarkMode} />;
  }

  // 3. If it's an article ID (contains a dot) or a known route
  if (Pg) {
    return <Pg language={language} onNav={onNav} handleBack={handleBack} isDarkMode={isDarkMode} />;
  }

  // 4. FALLBACK: Generic Article rendering for metadata-only articles or missing files
  if (page.includes('.')) {
    return <ArticleFallback articleId={page} language={language} onNav={onNav} isDarkMode={isDarkMode} />;
  }

  // 5. Absolute fallback: Home
  const HomePg = PAGES['home'];
  return HomePg ? <HomePg onNav={onNav} language={language} isDarkMode={isDarkMode} /> : <div>Page not found: {page}</div>;
}
