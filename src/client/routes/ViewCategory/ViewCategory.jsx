import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Icon from '../../components/Logo/Icon.jsx';
import { Link } from 'react-router-dom';
import './ViewCategory.css';
import { useLocation } from 'react-router-dom';
import { NotesContext } from '../../Context/notesContext.jsx';
import BigNote from '../../components/BigNote/BigNote.jsx';
import AddNote from '../../components/AddNote/AddNote.jsx';
import DeleteNote from '../../components/DeleteNote/DeleteNote.jsx';


const ViewCategory = () => {
  const location = useLocation();
  const name = location.state.category;
  const { notes } = useContext(NotesContext);

  const filteredNotes = notes.filter((note) => {
    return note.category === name;
  });

  const renderedNotes = filteredNotes.map((note, i) => {
    return (
      <BigNote
        id={note._id}
        category={name}
        key={`${note}${i}`}
        title={note.title}
        details={note.details}
        link={note.link}
      />
    );
  });

  // render add data component logic
  const [newNote, setNewNote] = useState(false);
  const [deleteNote, setDeleteNote] = useState(false);

  const showNewNote = (event) => {
    setNewNote(newNote ? false : true);
  };

  const showDeleteOptions = (event) => {
    setDeleteNote(deleteNote ? false : true);
  };

  return (
    <div>
      <div className="mainContainer">
        <div className="setting">
          <div className="homeButton">
            <Link to="/home">
              <Icon />
            </Link>
          </div>
          <button className="newNote" onClick={showNewNote}>
            Add New Note
          </button>
          {newNote && (
            <div className="addNoteContainer">
              <AddNote category={name} />
            </div>
          )}
        </div>
        <div className="deleteNote">
          <button className="deleteButton" onClick={showDeleteOptions}>
            Delete Note
          </button>
          {deleteNote && (
            <div className="deleteNoteContainer">
              <DeleteNote category={name} />
            </div>
          )}
        </div>
      </div>
      <div className="catContainer">
        <div className="viewCategoryCategory">{name}</div>
        <div>{renderedNotes}</div>
      </div>
    </div>
  );
};

export default ViewCategory;
