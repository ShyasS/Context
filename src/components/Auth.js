import React from 'react';
import { useUserContext } from './userContext';
import LoginPage from './Login-Page';
import Home from '../../src/components/Home';
function Auth() {
    const {user} = useUserContext();
  return (
    <div>
      {user.isGuestUser? <LoginPage/> : <Home/>}
    </div>
  );
}

export default Auth;
