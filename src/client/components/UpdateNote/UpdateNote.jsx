// import React from 'react';
// import './UpdateNote.css';
// import { NotesContext } from '../../Context/notesContext.jsx';
// import { useRef, useContext } from 'react';
import React from 'react';
import './UpdateNote.css';
import { NotesContext } from '../../Context/notesContext.jsx';
import { useRef, useContext } from 'react';

const UpdateNote = ({ title, data }) => {
  const { setNotes } = useContext(NotesContext);


  const titleInput = useRef();
  const linkInput = useRef();
  const detailsInput = useRef();

  const defaultNote = {
    title: title,
    newTitle: data[0],
    newLink: data[1],
    newDetails: data[2],
  };

  const updateNote = async (event) => {
    event.preventDefault();

    const updatedNote = {
      ...defaultNote,
      ...{
        newTitle: titleInput.current.value,
        newLink: linkInput.current.value,
        newDetails: detailsInput.current.value,
      },
    };

    const requestBody = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedNote),
    };

    const result = await fetch('/api/note/updateNote', requestBody);
    const resolvedData = await result.json();
    console.log('DATA:', resolvedData);
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
      <button className="submitUpdateNote" onClick={updateNote}>
        Submit
      </button>
    </form>
  );
};

export default UpdateNote;
