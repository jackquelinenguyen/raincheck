import React from 'react';
import Note from '../Note/Note.jsx';
import './Category.css';
import { Link } from 'react-router-dom';
import { NotesContext } from '../../Context/notesContext.jsx';
import { useContext } from 'react';

const Category = ({ name }) => {
  const { notes } = useContext(NotesContext);

  const filteredNotes = notes.filter((note) => {
    return note.category === name;
  });

  const renderedNotes = filteredNotes.map((note, i) => {
    return (
      <Note
        category={name}
        key={`${note}${i}`}
        title={note.title}
        details={note.details}
        link={note.link}
      />
    );
  });

  return (
    <Link
      to={'viewCategory'}
      state={{ category: name }}
      className="categoryBox"
    >
      <div className="categoryNotesContainer">{renderedNotes}</div>
      <div className="title">{name}</div>
    </Link>
  );
};

export default Category;
