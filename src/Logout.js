import React, { useEffect, useState } from 'react';

const TokenExpirationWarning = () => {
  const [tokenExpiresIn, setTokenExpiresIn] = useState(0);

  useEffect(() => {
    const expirationTimeInSeconds = localStorage.getItem('expirationTimeInSeconds');
    const parsedExpirationTime = expirationTimeInSeconds ? parseInt(expirationTimeInSeconds, 10) : 60;

    const countdownInterval = setInterval(() => {
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      const remainingTime = parsedExpirationTime - currentTimeInSeconds;

      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        console.log('Token expired');
        alert('Token has expired. Please refresh the page.');
        return;
      }

      setTokenExpiresIn(remainingTime);

      if (remainingTime <= 20) {
        console.log('Token will expire in 20 seconds');
      }

      if (remainingTime === 0) {
        clearInterval(countdownInterval);
        alert('Token has expired. Please refresh the page.');
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem('expirationTimeInSeconds', (Date.now() / 1000 + 60).toString());
  }, []);

  const refreshPage = () => {
    localStorage.setItem('expirationTimeInSeconds', (Date.now() / 1000 + 60).toString());
    window.location.reload();
  };

  return (
    <div>
      <p>Token expires in: {tokenExpiresIn} seconds</p>
      <button onClick={refreshPage}>Refresh</button>
    </div>
  );
};

export default TokenExpirationWarning;
