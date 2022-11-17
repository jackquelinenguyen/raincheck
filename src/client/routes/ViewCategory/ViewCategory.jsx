import React, { useContext, useState } from 'react';

import Icon from '../../components/Logo/Icon.jsx';
import { Link } from 'react-router-dom';
import './ViewCategory.css';
import { useLocation } from 'react-router-dom';
import { NotesContext } from '../../Context/notesContext.jsx';
import BigNote from '../../components/BigNote/BigNote.jsx';
import AddNote from '../../components/AddNote/AddNote.jsx';

const ViewCategory = () => {
  const location = useLocation();
  const title = location.state.category;
  const { notes } = useContext(NotesContext);

  const filteredNotes = notes.filter((note) => {
    return note.category === title;
  });

  const renderedNotes = filteredNotes.map((note, i) => {
    return (
      <BigNote
        key={`${note}${i}`}
        title={note.title}
        details={note.details}
        link={note.link}
      />
    );
  });

  // render add data component logic
  const [newNote, setNewNote] = useState(false);

  const showNewNote = (event) => {
    setNewNote(newNote ? false : true);
  };

  console.log('IM IN VIEW CATEGORIES');
  return (
    <div>
      <div className="setting">
        <div className="homeButton">
          <Link to="/">
            <Icon />
          </Link>
        </div>
        <button className="newNote" onClick={showNewNote}>
          Add New Note
        </button>
        {newNote && (
          <div className="addNoteContainer">
            <AddNote title={title} />
          </div>
        )}
      </div>
      <div className="catContainer">
        <div className="viewCategoryCategory">{title}</div>
        <div>{renderedNotes}</div>
      </div>
    </div>
  );
};

export default ViewCategory;
