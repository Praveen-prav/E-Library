import React, { useState } from 'react';
import '../styles/loginpage.css';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="login-page">
      <div className="login-window">
        <h1 className="login-title">Free Online Library</h1>
        <img src='images/logo.png' alt='logo'></img>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
