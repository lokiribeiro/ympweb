import React, { Component } from "react";
import {
    Container, Row, Col
} from 'react-bootstrap';
import FormContact from "./FormContact";

/** Modifications
    contacts-1: Change contacts details
*/

class Contact extends Component {
    render() {
        return (
            <div className="component_content contact">
                <Container>
                    <Row>
                    {/* // modification start - 09.09.2022 - contacts-1 */}
                        <Col xs={12} xl={6} className="m-auto">
                           
                            <div className="media">
                                <div className="media-body ">
                                    <h4 className="text-blue mb-0">TYS Team</h4>
                                    
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-envelope-o mr-1"></i>
                                        <a href="mailto: admin@tys.com.mt">admin@tys.com.mt</a>
                                    </p>
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-phone mr-1"></i>
                                        <a href="tel:+45 53 76 65 78">+45 53 76 65 78</a>
                                    </p>
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-skype mr-2"></i>
                                        tysolutions
                                    </p>
                                </div>
                            </div>
                        </Col>

                        {/* // modification end - 09.09.2022 - contacts-1 */}
                        <Col xs={12} xl={6}>
                            <FormContact/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;