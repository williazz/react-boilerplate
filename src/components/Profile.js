import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Name: {user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    )
  );
};

export default Profile;
