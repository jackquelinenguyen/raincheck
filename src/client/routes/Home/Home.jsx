import React, { useEffect, useState, useContext } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import SearchBar from '../../components/Search Bar/SearchBar.jsx';
import './Home.css';
import {
  CategoriesContext,
  CategoriesProvider,
} from '../../Context/categoriesContext.jsx';
import { NotesContext, NotesProvider } from '../../Context/notesContext.jsx';

const Home = () => {
  // const [change, setChange] = useState(false);

  // use this functionality to refetch state
  // const onChange = () => {
  //   // send to database
  //   setChange(change ? false : true);
  // };
  const { categories, setCategories } = useContext(CategoriesContext);
  const { notes, setNotes } = useContext(NotesContext);

  useEffect(() => {
    fetch('http://localhost:3000/api/category/getCategories')
      .then((response) => response.json())
      .then((data) => {
        return setCategories(data);
      })
      .catch((err) => console.log('error', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/note/getNotes')
      .then((response) => response.json())
      .then((data) => {
        return setNotes(data);
      })
      .catch((err) => console.log('error', error));
  }, []);

  return (
    <div className="homeContainer">
      <Logo />
      <SearchBar />
      <div className="dashContainer">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
