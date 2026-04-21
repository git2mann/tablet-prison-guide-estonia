import React, { useMemo } from 'react';

/**
 * MAGIC: Automatically import all category definition files.
 * This makes the system completely modular.
 */
const CATEGORY_MODULES = import.meta.glob('./categories/*.jsx', { eager: true });

// Define the official handbook sequence for global use
export const HANDBOOK_ORDER = [
  'arrival', // 1. Saabumine
  'daily',   // 2. Igapäevaelu
  'rules',   // 3. Reeglid
  'health',  // 4. Tervis
  'act',     // 5. Tegevused
  'rel',     // 6. Avavangla ja TEV
  'release', // 7. Vabanemine
  'staff',   // 8. Kes-on-kes
  'journey'  // 9. Teekond
];

export const useCategories = () => {
  return useMemo(() => {
    // Collect all default exports from the modules
    const modules = Object.values(CATEGORY_MODULES).map(module => module.default);
    
    // Sort based on the defined order
    return modules.sort((a, b) => {
      const indexA = HANDBOOK_ORDER.indexOf(a.id);
      const indexB = HANDBOOK_ORDER.indexOf(b.id);
      return (indexA !== -1 ? indexA : 99) - (indexB !== -1 ? indexB : 99);
    });
  }, []);
};

/**
 * Find the next article in the handbook sequence
 */
export const getNextArticle = (currentArticleId, categories) => {
  if (!currentArticleId || !categories.length) return null;

  // 1. Flatten all articles into a single ordered list based on HANDBOOK_ORDER
  const allArticles = [];
  HANDBOOK_ORDER.forEach(catId => {
    const category = categories.find(c => c.id === catId);
    if (category) {
      category.articles.forEach(art => {
        allArticles.push({
          ...art,
          categoryId: category.id,
          categoryTitle: category.title
        });
      });
    }
  });

  // 2. Find index of current article
  const currentIndex = allArticles.findIndex(a => a.id === currentArticleId);
  
  // 3. Return next one if it exists
  if (currentIndex !== -1 && currentIndex < allArticles.length - 1) {
    return allArticles[currentIndex + 1];
  }

  return null;
};
