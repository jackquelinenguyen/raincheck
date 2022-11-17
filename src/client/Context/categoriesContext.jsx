import React, { useEffect, useState, createContext } from 'react';

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const value = { categories, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
