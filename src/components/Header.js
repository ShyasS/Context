import React from 'react';
import { useUserContext } from './userContext';
function Header() {
    const {user} = useUserContext();
    console.log(user);
    const {logout} = useUserContext();
  return (
    <div>
       <h1> Welcome {user.name} {!user.isGuestUser && (<button onClick = {logout} className = "btn btn-primary">LogOut</button>)}</h1>
    </div>
  );
}

export default Header;
