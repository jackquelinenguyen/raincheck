import React from 'react';
import './SignUp.css';
import { AuthContext } from '../../Context/authContext.jsx';
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const usernameInput = useRef();
  const passwordInput = useRef();

  const createUser = async (event) => {
    event.preventDefault();
    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: usernameInput.current.value,
        password: passwordInput.current.value,
      }),
    };
    const result = await fetch('/api/auth/createUser', requestBody);
    const resolvedData = await result.json();
    // send to homepage
    // console.log(resolvedData._id);
    setCurrentUser(resolvedData._id);
    navigate('/home');
  };

  return (
    <form className="formNewUser">
      <label>
        <input
          ref={usernameInput}
          className="usernameInput"
          type="text"
          placeholder="New Username"
        ></input>
      </label>
      <label>
        <input
          ref={passwordInput}
          className="passwordInput"
          type="password"
          placeholder="New Password"
        ></input>
      </label>
      <button className="submitUser" onClick={createUser}>
        Submit
      </button>
    </form>
  );
};

export default SignUp;
