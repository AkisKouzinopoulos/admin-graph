import React, { useState } from 'react';

const Home = () => {
  const [error, setError] = useState(false);

  return (
    <>
      {error && <div>Error</div>}
      <div>React Home page</div>
    </>
  );
};

export default Home;
