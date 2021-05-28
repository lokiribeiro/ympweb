import React, { Component } from "react";
import {
    Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { SectionsContainer, Section } from 'react-fullpage';
import { Helmet } from 'react-helmet';

class CookiePolicy extends Component {
    render() {
        if (window.screen.width < 1200) {
            var scroll = true;
        } else {
            scroll = false;
        }

        let options = {
            sectionClassName: 'section',
            anchors: ['first_cp'],
            responsiveWidth: 1200,
            scrollBar: scroll,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '150px',
            arrowNavigation: true,
        };

        return (
            <Router>
                <Helmet>
                    <title>YMP - Cookie Policy</title>
                </Helmet>
                <SectionsContainer className="container" {...options}>
                <Section className="first_cp_section fp-auto-height">
                    <Container>
                        <h2 className="mb-5">Cookie Policy for Yacht Maintenance Program</h2>

                        <p>This is the Cookie Policy for Yacht Maintenance Program, accessible from www.ymp.ltd</p>

                        <p><strong>What Are Cookies</strong></p>

                        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>

                        <p><strong>How We Use Cookies</strong></p>

                        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                        <p><strong>Disabling Cookies</strong></p>

                        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site.</p>

                        <p><strong>The Cookies We Set</strong></p>

                        <ul>
                            <li>
                                <p>Forms related cookies</p>
                                <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
                            </li>
                        </ul>

                        <p><strong>Third Party Cookies</strong></p>

                        <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>

                        <ul>
                            <li>
                                <p>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>
                            </li>
                        </ul>

                        <p><strong>More Information</strong></p>

                        <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>

                        <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>

                        <ul>
                            <li>Email: <a href="mailto: admin@ymp.ltd">admin@ymp.ltd</a></li>
                        </ul>
                        </Container>
                    </Section>
                </SectionsContainer>
            </Router>
        );
    }
}

export default CookiePolicy;