import React, { useState, useEffect } from 'react';
import BikesApiClient from '../../clients/BikesApiClient';

const Home = () => {
  const [bikesData, setBikesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    BikesApiClient.getBikesData()
      .then(response => {
        setBikesData(response);
        setIsLoading(false);
        console.log('response', response);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, [isLoading, error]);

  return (
    <>
      {error && <div>Error</div>}
      <div>React Home page</div>
    </>
  );
};

export default Home;
