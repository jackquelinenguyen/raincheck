import React, { useEffect, useState, createContext } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import SearchBar from '../../components/Search Bar/SearchBar.jsx';
import './Home.css';

export const AppContext = createContext();

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [notes, setNotes] = useState([]);
  const [change, setChange] = useState(false);

  // use this functionality to refetch state
  const onChange = () => {
    // send to database
    setChange(change ? false : true);
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/category/getCategories')
      .then((response) => response.json())
      .then((data) => {
        return setCategories(data);
      })
      .catch((err) => console.log('error', error));
  }, [change]);

  useEffect(() => {
    fetch('http://localhost:3000/api/note/getNotes')
      .then((response) => response.json())
      .then((data) => {
        return setNotes(data);
      })
      .catch((err) => console.log('error', error));
  }, [change]);

  return (
    <AppContext.Provider value={{ categories, setCategories, notes, setNotes }}>
      <div className="homeContainer">
        <Logo />
        <SearchBar />
        <div className="dashContainer">
          <Dashboard />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Home;
