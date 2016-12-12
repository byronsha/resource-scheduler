import React, { Component, PropTypes as T } from 'react';
import { Icon } from 'semantic-ui-react';

export default class LogoutButton extends Component {
	render() {
    const style = {
      float: 'right',
      fontSize: '14px'
    }

		return (
			<span style={style}>
        <Icon name='shutdown' onClick={() => this.props.auth.logout()} />
      </span>
		);
	}
}
