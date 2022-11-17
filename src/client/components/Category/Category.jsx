import React from 'react';
import Note from '../Note/Note.jsx';
import './Category.css';

const Category = ({ title }) => {
  return (
    <div className="categoryBox">
      <div className="category">
        <Note />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Category;
