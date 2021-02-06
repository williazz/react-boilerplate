import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      type="button"
      onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};

export default LogoutButton;
