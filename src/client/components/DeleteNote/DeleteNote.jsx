import React from 'react';
import './DeleteNote.css';
import { NotesContext } from '../../Context/notesContext.jsx';
import { useRef, useContext } from 'react';

const DeleteNote = ({ category }) => {
  const { setNotes } = useContext(NotesContext);
  const titleInput = useRef();

  const deleteNote = async (event) => {
    event.preventDefault();
    const requestBody = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleInput.current.value,
      }),
    };
    const result = await fetch('/api/note/deleteNote', requestBody);
    const resolvedData = await result.json();
    setNotes(resolvedData);
  };
  return (
    <form className="formDelete">
      <label>
        <input
          ref={titleInput}
          className="deleteNoteInput"
          type="text"
          placeholder="Please input title of note you want deleted"
        ></input>
      </label>
      <button className="confirmDelete" onClick={deleteNote}>
        Confirm Delete
      </button>
    </form>
  );
};

export default DeleteNote;
