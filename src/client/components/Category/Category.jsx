import React from 'react';
import Note from '../Note/Note.jsx';
import './Category.css';

const Category = ({ title }) => {
  return (
    <div>
      <div className="category"></div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Category;
