import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from './config.json';
import NavBar from './NavBar'
import { Button, Container, Col, NavItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSignOutAlt, FaGoogle } from 'react-icons/fa';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Puntuar from "./Puntuar";

class App extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: '' };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: '', user: null })
    };

    onFailure = (error) => {
        alert(error);
        console.log(error)
    };

    googleResponse = (response) => {
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({ isAuthenticated: true, user, token })
                }
            });
        })
    };

    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <HashRouter>
                    <Container>
                        <NavBar>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/puntuar">Puntuar</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button onClick={this.logout}><FaSignOutAlt /></Button>
                            </NavItem>
                        </NavBar>
                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/puntuar" component={Puntuar} />
                        </div>
                    </Container>
                </HashRouter>
            ) :
            (
                <Container>
                    <NavBar>
                        <Col >
                            <GoogleLogin
                                clientId={config.GOOGLE_CLIENT_ID}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Login <FaGoogle /></button>
                                )}
                                onSuccess={this.googleResponse}
                                onFailure={this.onFailure}
                            />
                        </Col>
                    </NavBar>
                </Container>
            );



        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
