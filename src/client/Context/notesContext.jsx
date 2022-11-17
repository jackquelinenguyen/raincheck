import React, { useEffect, useState, createContext } from 'react';

export const NotesContext = createContext({
  notes: [],
  setNotes: () => null,
});

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const value = { notes, setNotes };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
