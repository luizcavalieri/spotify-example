import * as queryString from 'query-string';
import React, { Component } from 'react';
import executeRestApi from './rest';


/**
 * Renders Callback component.
 * React.Component: https://reactjs.org/docs/react-component.html
 * */
class Callback extends Component {
  static propTypes = {};

  static contextTypes = {};

  state = {
    me: null,
    isLoaded: false,
  };

  async componentDidMount() {

    const parsed = queryString.parse(this.props.location.hash); // https://github.com/sindresorhus/query-string
    console.log(parsed);

    const meEndpoint = `${process.env.REACT_APP_SPOTIFY_BASE_ENDPOINT}/me`;
    await executeRestApi(
      'GET',
      meEndpoint,
      { data: null },
      { token: parsed.access_token },
    ).then(response => this.setState({ me: response.data, isLoaded: true }));


  }

  render() {
    const { isLoaded, me } = this.state;
    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="Callback">
        <h1>This is me in Spotify... </h1>
        <div>
          {JSON.stringify(me)}
        </div>
      </div>
    );
  }
}

export default Callback;
