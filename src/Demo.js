import React, { Component } from "react";
import {
    Container, Row, Col
} from 'react-bootstrap';
import FormDemo from "./FormDemo";

class Demo extends Component {
    render() {
        return (
            <div className="component_content demo">
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>

                            <FormDemo/>

                        </Col>
                        <Col xs={12} lg={6}>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Demo;