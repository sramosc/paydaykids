import React, { Component } from 'react'
import './App.css'
import { GoogleLogin } from 'react-google-login';

class App extends Component {

  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: '' };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  };

  googleResponse = (e) => { };

  onFailure = (error) => {
    alert(error);
  }

  render() {
    let content = !!this.state.isAuthenticated ?
      (
        <div>
          <p>Authenticated</p>
          <div>
            {this.state.user.email}
          </div>
          <div>
            <button onClick={this.logout} className="button">
              Log out
            </button>
          </div>
        </div>
      ) :
      (
        <div>
          <GoogleLogin
            clientId="591884413778-r8amvm1i48ucfu7lvdmingu5ahjd0ka6.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.googleResponse}
          />
        </div>
      );

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;