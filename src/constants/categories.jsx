import React, { useMemo } from 'react';

/**
 * MAGIC: Automatically import all category definition files.
 * This makes the system completely modular.
 */
const CATEGORY_MODULES = import.meta.glob('./categories/*.jsx', { eager: true });

export const useCategories = () => {
  return useMemo(() => {
    // Collect all default exports from the modules
    return Object.values(CATEGORY_MODULES).map(module => module.default);
  }, []);
};
