import React from 'react';
import Note from '../Note/Note.jsx';
import './Category.css';
import { Outlet, Link } from 'react-router-dom';

const Category = ({ title }) => {
  return (
    <div className="categoryBox">
      <div className="category">
        <Note />
      </div>
      <Link to={'/'} className="title">
        {title}
      </Link>
    </div>
  );
};

export default Category;
