import { EventEmitter } from 'events';
import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';
import axios from 'axios';

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      theme: {
        logo: 'http://orig07.deviantart.net/7685/f/2013/248/6/5/tinker_icon_by_imkb-d6l50q2.png'
      },
        languageDictionary: {
        title: 'I\'m just tinkering about!'
      },
      auth: {
        redirectUrl: 'http://localhost:8080/login',
        responseType: 'token'
      }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getPgProfile = this.getPgProfile.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);

    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error);
      } else {
        this.setProfile(profile);
        this.addUser(profile);
      }
    })
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('pg_profile');
    browserHistory.replace('/login');
  }

  loggedIn() {
    return !!this.getToken();
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  getProfile() {
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  getPgProfile() {
    const profile = localStorage.getItem('pg_profile');
    return profile ? JSON.parse(localStorage.pg_profile) : {};
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  addUser(profile) {
  	axios.post(`/users/api/v1/users`, profile)
      .then((response) => {
        localStorage.setItem('pg_profile', JSON.stringify(response.data[0]));
        // navigate to the home route
        browserHistory.replace('/dashboard');
        console.log('Successfully logged in!');
      })
      .catch((error) => {
        console.log('Error! Something went wrong!', error);
      });
  }
}
