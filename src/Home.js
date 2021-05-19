import React, { Component } from "react";
import {
    Container, Row, Col
} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className="component_content home">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="mb-5">
                                The most user-friendly, effective, and affordable maintenance program. Get a demo today and start saving time and money for €650 a year.
                            </h1>
                            <p><strong>REQUEST A DEMO TODAY!</strong></p>
                            <a href="#demo" className="btndemo border rounded px-5 py-2 d-inline-block">GET A DEMO</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;