import React from 'react';
import Note from '../Note/Note.jsx';
import './Category.css';
import { Link } from 'react-router-dom';
import { NotesContext } from '../../Context/notesContext.jsx';
import { useContext } from 'react';

const Category = ({ title }) => {
  const { notes } = useContext(NotesContext);

  const filteredNotes = notes.filter((note) => {
    return note.category === title;
  });

  const renderedNotes = filteredNotes.map((note) => {
    return <Note title={note.title} details={note.details} link={note.link} />;
  });

  return (
    <Link
      to={'viewCategory'}
      state={{ category: title }}
      className="categoryBox"
    >
      <div className="category">{renderedNotes}</div>
      <div className="title">{title}</div>
    </Link>
  );
};

export default Category;
