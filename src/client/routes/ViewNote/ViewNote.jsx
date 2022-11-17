import React from 'react';
import { useLocation } from 'react-router-dom';
import { NotesContext } from '../../Context/notesContext.jsx';
import { useContext, useState } from 'react';
import Icon from '../../components/Logo/Icon.jsx';
import './ViewNote.css';
import { Link } from 'react-router-dom';
import UpdateNote from '../../components/UpdateNote/UpdateNote.jsx';

const ViewNote = () => {
  const location = useLocation();
  const title = location.state.title;
  const { notes } = useContext(NotesContext);

  const indivNote = notes.filter((note) => {
    return note.title === title;
  });
  console.log(`rendered view note:`, indivNote);
  const [updateNote, setUpdateNote] = useState(false);

  const updateThisNote = (event) => {
    setUpdateNote(updateNote ? false : true);
  };

  return (
    <div>
      <div className="updateSettings">
        <div className="noteIcon">
          <Link to="/">
            <Icon />
          </Link>
        </div>
        <button className="updateNote" onClick={updateThisNote}>
          Update Note
        </button>
        {updateNote && (
          <div className="updateNoteContainer">
            <UpdateNote
              title={title}
              data={[
                indivNote[0].title,
                indivNote[0].link,
                indivNote[0].details,
              ]}
            />
          </div>
        )}
      </div>
      <div className="viewNote">
        <div className="containerDetails">
          <div className="label">Category:</div>
          <div className="details">{indivNote[0].category}</div>
        </div>
        <div className="containerDetails">
          <div className="label">Title:</div>
          <div className="details">{indivNote[0].title}</div>
        </div>
        <div className="containerDetails">
          <div className="label">Link:</div>
          <div className="details">{indivNote[0].link}</div>
        </div>
        <div className="containerDetails">
          <div className="label">Details:</div>
          <div className="details">{indivNote[0].details}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
