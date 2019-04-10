import React, { Component } from 'react'
import './App.css'
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
//import Main from "./Main"

const responseGoogle = (response) => {
  console.log(response);
}
class App extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="591884413778-r8amvm1i48ucfu7lvdmingu5ahjd0ka6.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={responseGoogle}
        >
        </GoogleLogout>
      </div>
    )
  }
}

export default App;