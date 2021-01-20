import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0 } from './secrets';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <Auth0Provider
      domain={auth0.domain}
      clientId={auth0.clientId}
      redirectUri={window.location.origin}>
      <h1>Hello Auth0 in React</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Auth0Provider>
  );
}

export default App;
