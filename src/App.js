import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0_SPA } from './config';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <Auth0Provider
      domain={AUTH0_SPA.DOMAIN}
      clientId={AUTH0_SPA.CLIENT_ID}
      redirectUri={window.location.origin}>
      <h1>Hello Auth0 in React</h1>
      <LoginButton />
      <LogoutButton />
    </Auth0Provider>
  );
}

export default App;
