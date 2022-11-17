import React from 'react';
import './SignOut.css';
import { AuthContext } from '../../Context/authContext.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// onclick for sign out
// change the authState currentUser to null
// navigate to auth page root page

const SignOut = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOutUser = (event) => {
    event.preventDefault();
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <div className="signOutContainer">
      <button className="signOutButton" onClick={signOutUser}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
