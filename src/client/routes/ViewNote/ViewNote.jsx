import React from 'react';
import { useLocation } from 'react-router-dom';
import { NotesContext } from '../../Context/notesContext.jsx';
import { useContext } from 'react';
import Icon from '../../components/Logo/Icon.jsx';
import './ViewNote.css';
import { Link } from 'react-router-dom';

const ViewNote = () => {
  const location = useLocation();
  const title = location.state.title;
  const { notes } = useContext(NotesContext);

  const indivNote = notes.filter((note) => {
    return note.title === title;
  });
  console.log(indivNote);
  return (
    <div className="noteIcon">
      <Link to="/">
        <Icon />
      </Link>
      <div className="viewNote">
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
