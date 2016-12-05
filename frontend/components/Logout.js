import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'

export default class Logout extends React.Component {
  static get propTypes() {
    return {
      location: T.object,
      auth: T.instanceOf(AuthService)
    }
  };

  componentWillMount() {
    const { auth } = this.props.routes[0];
    auth.logout();
  }

  render() {
    return <div>Logging out...</div>;
  }
}
