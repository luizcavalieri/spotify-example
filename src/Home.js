import React, { Component } from 'react';
import logo from './logo.svg';

const URI_CALLBACK = 'http://192.168.1.6:3000/callback'
const RESPONSE_TYPE = 'token';
const CLIENT_GENERATED_TOKEN = 'test';
const SCOPE = 'user-read-private%20user-read-email';
const SHOW_DIALOG = true;


/**
 * Renders Home component.
 * React.Component: https://reactjs.org/docs/react-component.html
 * */
class Home extends Component {
  static propTypes = {};

  static contextTypes = {};

  componentDidMount() {
  }

  handleAuthorization = () => {

    // Redirects user to the Spotify authentication
    window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${URI_CALLBACK}&state=${encodeURIComponent(CLIENT_GENERATED_TOKEN)}&scope=${SCOPE}&show_dialog=${SHOW_DIALOG}`;
  };

  render() {
    return (
      <div className="Home">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <br />
        <button onClick={this.handleAuthorization}>
          Go to spotify
        </button>
      </div>
    );
  }
}

export default Home;
