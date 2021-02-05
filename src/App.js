import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0 } from './config';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <Auth0Provider
      domain={AUTH0.DOMAIN}
      clientId={AUTH0.CLIENT_ID}
      redirectUri={window.location.origin}
      audience={AUTH0.AUDIENCE}
      scope="read:current_user update:current_user_metadata">
      <h1>Hello Auth0 in React</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Auth0Provider>
  );
}

export default App;
