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

  async componentDidMount() {

    const parsed = queryString.parse(this.props.location.hash); // https://github.com/sindresorhus/query-string
    console.log(parsed);

    const meEndpoint = `${process.env.REACT_APP_SPOTIFY_BASE_ENDPOINT}/me`;
    await executeRestApi(
      'GET',
      meEndpoint,
      { data: null },
      { token: parsed.access_token },
    ).then(response => console.log(response))
  }

  render() {
    return (
      <div className="Callback">
        <br />
        This is the Callback component!
        <br />
        <br />
        <span>
          {JSON.stringify(this.props.location.hash)}
        </span>
      </div>
    );
  }
}

export default Callback;
