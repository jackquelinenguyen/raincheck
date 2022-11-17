import React from 'react';
import { AuthContext } from '../../Context/authContext.jsx';
import { useContext, useState } from 'react';
import './Auth.css';
import Icon from '../../components/Logo/Icon.jsx';
import SignUp from '../../components/SignUp/SignUp.jsx';
import Login from '../../components/Login/Login.jsx';

const Auth = () => {
  // toggle to show either sign up or login
  const [signUp, setSignUp] = useState(false);

  // function to toggle auth to login or signup
  // if signup is false, login
  // if signup is true, signup
  const toggleAuth = (event) => {
    setSignUp(signUp ? false : true);
  };

  return (
    <div className="authPageContainer">
      <div className="forLogin">
        <button onClick={toggleAuth}>Login</button>
        {!signUp && <Login />}
      </div>
      <div className="authPageIcon">
        <Icon />
      </div>
      <div className="forSignUp">
        <button onClick={toggleAuth}>SignUp</button>
        {signUp && (
          <div>
            <SignUp />
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
