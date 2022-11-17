import React from 'react';
import './AddNote.css';
import { NotesContext } from '../../Context/notesContext.jsx';
import { useRef, useContext } from 'react';

const AddNote = ({ category }) => {
  const { setNotes } = useContext(NotesContext);

  const titleInput = useRef();
  const linkInput = useRef();
  const detailsInput = useRef();

  const submitNote = async (event) => {
    event.preventDefault();
    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category,
        title: titleInput.current.value,
        link: linkInput.current.value,
        details: detailsInput.current.value,
      }),
    };
    const result = await fetch('/api/note/createNote', requestBody);
    const resolvedData = await result.json();
    setNotes(resolvedData);
  };

  return (
    <form className="formAdd">
      <label>
        <input
          ref={titleInput}
          className="addNoteInput"
          type="text"
          placeholder="title"
        ></input>
      </label>
      <label>
        <input
          ref={linkInput}
          className="addNoteInput"
          type="text"
          placeholder="link"
        ></input>
      </label>
      <label>
        <input
          ref={detailsInput}
          className="addNoteInput"
          type="text"
          placeholder="details"
        ></input>
      </label>
      <button className="submitNote" onClick={submitNote}>
        Submit
      </button>
    </form>
  );
};

export default AddNote;
