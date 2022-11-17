import React, { useContext } from 'react';

import Icon from '../../components/Logo/Icon.jsx';
import { Link } from 'react-router-dom';
import './ViewCategory.css';
import { useLocation } from 'react-router-dom';
import { NotesContext } from '../../Context/notesContext.jsx';
import BigNote from '../../components/BigNote/BigNote.jsx';

const ViewCategory = () => {
  const location = useLocation();
  const title = location.state.category;
  const { notes } = useContext(NotesContext);

  const filteredNotes = notes.filter((note) => {
    return note.category === title;
  });

  const renderedNotes = filteredNotes.map((note) => {
    return (
      <BigNote title={note.title} details={note.details} link={note.link} />
    );
  });

  return (
    <div>
      <div className="homeButton">
        <Link to="/">
          <Icon />
        </Link>
      </div>
      <div className="catContainer">
        <div className="viewCategoryCategory">{title}</div>
        <div>{renderedNotes}</div>
      </div>
    </div>
  );
};

export default ViewCategory;
