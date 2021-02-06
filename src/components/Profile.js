import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AUTH0_SPA } from '../config';

const Profile = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          domain: AUTH0_SPA.DOMAIN,
          scope: 'read:current_user',
        });

        const userDetailsByIdUrl = `${AUTH0_SPA.DOMAIN}users/${user.sub}`;

        const metadataResponse = await axios.get({
          url: userDetailsByIdUrl,
          headers: {
            authorization: ['Bearer', accessToken].join(' '),
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (err) {
        console.error(err);
      }
    };
    getUserMetadata();
  }, [isLoading, isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <p>Loading profile... </p>;

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>{JSON.stringify(userMetadata, null, 2) || 'No metadata'}</p>
      </div>
    )
  );
};

export default Profile;
