import React, { Component } from "react";
import {
    Container, Row, Col
} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div className="component_content about">
                <Container>
                    <Row>
                        <Col xs={12} xl={6}>
                            <h2 className="about-title">About Us</h2>
                            <p>
                                YMP is a cloud-based yacht maintenance program with yacht crew members and management companies in mind. YMP has been specifically tailored by several experienced yacht engineers, stewardesses, mates and captains. We could see that there was a common problem with planned maintenance programs currently available in the market. They were all too complex or difficult to use. We noticed that crew members only used about 20% of the program’s features, or simply lost interest in using them altogether. What is the point of a maintenance program if you have to spend most of your time trying to configure the program instead of getting any real work done? On top of this, you also have to factor in the cost of the programs which can be pretty expensive.</p>

                            <p> YMP is specially designed to accommodate three factors: simplicity, efficiency and affordability.</p>

                            <p> It’s simple to use, yet highly effective in helping you manage the everyday work required onboard yachts, and the price for the program is the lowest on the market, making it one of the best value systems available.

                                With the use of YMP you can improve the organization, efficiency and effectiveness of work for all departments onboard. You’ll also benefit from the convenience of YMP by being able to gain access anytime, anywhere, whether you are online or offline through our web app and mobile applications.

                            </p>
                        </Col>
                        <Col xs={12} xl={6}>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;