import React from 'react';
import './BigNote.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BigNote = ({ title, category, id }) => {
  return (
    <Link to={'viewNote'} state={{ title, category, id }}>
      <div className="bigNote">{title}</div>
    </Link>
  );
};

export default BigNote;
