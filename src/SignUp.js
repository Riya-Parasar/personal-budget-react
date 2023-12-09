import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your validation logic here (e.g., check for empty fields, password matching, etc.)
    if (!username || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage('');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      setSuccessMessage('');
    } else {
      // For example purposes, assume successful signup
      setErrorMessage('');
      setSuccessMessage('Signup successful!');

      // Perform signup/authentication logic here (send data to backend, etc.)
      // For example purposes, log the credentials to the console
      console.log('Username:', username);
      console.log('Password:', password);

      // Reset form fields after successful signup
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
