import React from 'react';
import Category from '../Category/Category.jsx';
import { Fragment } from 'react';

const Dashboard = ({ categories }) => {
  // map through categories and render category component with a title
  const categoryPosts = categories.map((category, index) => {
    return <Category title={category.name} />;
  });

  return <div className="categoryContainer">{categoryPosts}</div>;
};

export default Dashboard;
