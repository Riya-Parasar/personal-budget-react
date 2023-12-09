import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform basic validation, here just checking if both fields are filled
    if (username.trim() !== '' && password.trim() !== '') {
      alert('Login successful!');
      // You can add logic to redirect the user to another page after successful login
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
