import React from 'react';
import './Login.css';
import { AuthContext } from '../../Context/authContext.jsx';
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const usernameInput = useRef();
  const passwordInput = useRef();

  const confirmUser = async (event) => {
    event.preventDefault();
    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: usernameInput.current.value,
        password: passwordInput.current.value,
      }),
    };
    const result = await fetch('/api/auth/confirmUser', requestBody);
    const resolvedData = await result.json();
    if (resolvedData) {
      setCurrentUser(resolvedData._id);
      navigate('/home');
    }
  };

  return (
    <form className="formConfirmUser">
      <label>
        <input
          ref={usernameInput}
          className="loginUser"
          type="text"
          placeholder="Username"
        ></input>
      </label>
      <label>
        <input
          ref={passwordInput}
          className="loginPassword"
          type="password"
          placeholder="Password"
        ></input>
      </label>
      <button onClick={confirmUser}>Submit</button>
    </form>
  );
};

export default Login;
