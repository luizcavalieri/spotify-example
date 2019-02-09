import React, { Component } from 'react';

import './App.css';

import Routes from './routes';

const URI_CALLBACK = 'http://192.168.1.6:3000/callback'
const RESPONSE_TYPE = 'token';
const CLIENT_GENERATED_TOKEN = 'test';
const SCOPE = 'user-read-private%20user-read-email';
const SHOW_DIALOG = true;

class App extends Component {

  handleAuthorization = () => {

    // Redirects user to the Spotify authentication
    window.location = `https://accounts.spotify.com/authorize?
    client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&
    response_type=${RESPONSE_TYPE}&
    &redirect_uri=${URI_CALLBACK}&
    state=${encodeURIComponent(CLIENT_GENERATED_TOKEN)}&
    scope=${SCOPE}&
    show_dialog=${SHOW_DIALOG}`;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Routes in order to get the content from /callback url*/}
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
