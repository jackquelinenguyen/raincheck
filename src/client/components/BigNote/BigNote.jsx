import React from 'react';
import './BigNote.css';
import { Link } from 'react-router-dom';

const BigNote = ({ title, category }) => {
  return (
    <Link to={'viewNote'} state={{ title, category }}>
      <div className="bigNote">{title}</div>
    </Link>
  );
};

export default BigNote;
