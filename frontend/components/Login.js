import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'

export default class Login extends React.Component {
  static get propTypes() {
    return {
      location: T.object,
      auth: T.instanceOf(AuthService)
    }
  };

  render() {
    const { auth } = this.props.routes[0];
    return (
      <div>
        <h2>Login</h2>
        <button onClick={auth.login.bind(this)}>Login</button>
      </div>
    );
  }
}
