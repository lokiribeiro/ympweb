import React, { Component } from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './images/Logo/YMP small logo no bg.png';
import user from './images/Logo/user-solid.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Navbar, Nav
} from 'react-bootstrap';
import HomePage from "./HomePage";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./CookiePolicy";
import TermsAndConditions from "./TermsAndConditions";
import NotFound from "./404";

class Main extends Component {

    render() {

        return (
            <Router>
            <div>
                <div className="App-header">
                    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" justify-content-between="true">
                        <Container>
                            <Navbar.Brand href="/">
                                <img src={logo} className="App-header-logo" alt="logo" />
                                <span className="App-header-text"> yacht maintenance program</span>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav className="mr-auto mr-sm-2">
                                    <Nav.Link href="/#home">Home</Nav.Link>
                                    <Nav.Link href="/#about">About Us</Nav.Link>
                                    <Nav.Link href="/#overview">Overview</Nav.Link>
                                    <Nav.Link href="/#getademo">Get A Demo</Nav.Link>
                                    <Nav.Link href="/#contact">Contact Us</Nav.Link>
                                    <Nav.Link className="singin" href="https://ymponline.com/">
                                        <img src={user} className="user-logo" alt="logo" />Sign in
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="App-content">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/privacypolicy" component={PrivacyPolicy} />
                        <Route path="/cookiepolicy" component={CookiePolicy} />
                        <Route path="/termsandconditions" component={TermsAndConditions} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
            </Router>
        );
    }
}

export default Main;