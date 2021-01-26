import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AUTH0_SPA } from '../secrets';

const Profile = () => {
  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      if (isLoading || !isAuthenticated) return;
      const { DOMAIN } = AUTH0_SPA;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${DOMAIN}/api/v2/`,
          scope: 'read:current_user',
        });

        const userDetailsByIdUrl = `https://${DOMAIN}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        /* eslint-disable */
        const { user_metadata } = await metadataResponse.json();
        setUserMetadata(user_metadata);
        console.log({ userDetailsByIdUrl, user_metadata, accessToken });
      } catch (e) {
        console.error('Ruh roh:', e.message);
      }
    };

    getUserMetadata();
  }, []);
  /* eslint-enable */

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>
          User Metadata:{' '}
          {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          ) : (
            'No user metadata defined'
          )}
        </p>
      </div>
    )
  );
};

export default Profile;
