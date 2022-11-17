import React from 'react';
import Category from '../Category/Category.jsx';
import './Dashboard.css';
import { useContext } from 'react';
import { CategoriesContext } from '../../Context/categoriesContext.jsx';

const Dashboard = () => {
  // map through categories and render category component with a title

  const { categories } = useContext(CategoriesContext);
  const categoryPosts = categories.map((category, i) => {
    return <Category key={`${category}${i}`} name={category.name} />;
  });

  return <div className="categoryContainer">{categoryPosts}</div>;
};

export default Dashboard;
