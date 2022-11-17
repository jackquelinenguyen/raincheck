import React from 'react';
import Category from '../Category/Category.jsx';
import './Dashboard.css';
import { useContext } from 'react';
import { AppContext } from '../../routes/Home/Home.jsx';

const Dashboard = () => {
  // map through categories and render category component with a title

  const { categories } = useContext(AppContext);
  const categoryPosts = categories.map((category, index) => {
    return <Category title={category.name} />;
  });

  return <div className="categoryContainer">{categoryPosts}</div>;
};

export default Dashboard;
