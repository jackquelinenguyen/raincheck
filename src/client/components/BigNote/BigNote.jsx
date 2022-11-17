import React from 'react';
import './BigNote.css';
import { Link } from 'react-router-dom';

const BigNote = ({ title }) => {
  return (
    <Link to={'viewNote'} state={{ title: title }}>
      <div className="bigNote">{title}</div>
    </Link>
  );
};

export default BigNote;
