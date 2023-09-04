import React from 'react';
import { useUserContext } from './userContext';

function Home() {
  const {user} = useUserContext();
  return (
    <div>
      <h1 style = {{marginTop:'40px auto'}}>You're now logged in as {user.name}</h1>
    </div>
  );
}

export default Home;
