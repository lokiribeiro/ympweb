import React, { Component } from "react";
import {
    Container, Row, Col
} from 'react-bootstrap';
import logo from './images/Logo/logo_big.png';

class Footer extends Component {


    render() {

        let year = new Date().getFullYear();

        return (
            <div className="component_content footer">
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <img src={logo} alt="Logo" className="d-block mx-auto img-fluid"/>
                                <a href="/privacypolicy" className="text-blue">Privacy Policy | </a>
                                <a href="/cookiepolicy" className="text-blue">Cookie Policy | </a>
                                <a href="/termsandconditions" className="text-blue">Terms and Conditions</a>
                                    <p className="mb-0"><small>Technical Yacht Solutions (TYS) Ltd Kemp House, 160 City Road, London EC1V 2NX, United Kingdom</small></p>
                                    <p><small>Copyright © {year} YMP. All Rights Reserved</small></p>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;