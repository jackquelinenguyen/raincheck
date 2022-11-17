import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import Logo from '../components/Logo/Logo.jsx';
import SearchBar from '../components/Search Bar/SearchBar.jsx';
import './Home.css';

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/category/getCategories')
      .then((response) => response.json())
      .then((data) => {
        return setCategories(data);
      })
      .catch((err) => console.log('error', error));
  });

  return (
    <div className="homeContainer">
      <Logo />
      <SearchBar />
      <div className="dashContainer">
        <Dashboard categories={categories} />
      </div>
    </div>
  );
};

export default Home;
