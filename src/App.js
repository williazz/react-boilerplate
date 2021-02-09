import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0 } from './config';
import Profile from './components/Profile';
import Login from './components/LoginButton';
import Logout from './components/LogoutButton';

function App() {
  return (
    <Auth0Provider
      domain={AUTH0.DOMAIN}
      clientId={AUTH0.CLIENT_ID}
      redirectUri={window.location.origin}>
      <Profile />
      <Login />
      <Logout />
    </Auth0Provider>
  );
}

export default App;
