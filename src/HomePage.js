import React, { Component } from "react";
import './App.scss';
import Home from "./Home";
import About from "./About";
import Overview from "./Overview";
import Demo from "./Demo";
import Contact from "./Contact";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SectionsContainer, Section } from 'react-fullpage';

class HomePage extends Component {

    render() {
        if (window.innerWidth < 1200) {
            var scroll = true;
        } else {
            scroll = false;
        }

        let options = {
            sectionClassName: 'section',
            anchors: ['home', 'about', 'overview', 'getademo', 'contact', 'footer'],
            responsiveWidth: 1200,
            scrollBar: scroll,
            navigation: true,
            verticalAlign: true,
            sectionPaddingTop: '95px',
            arrowNavigation: true,
        };

        return (
            <SectionsContainer className="container" {...options}>
                <Section className="home_section">
                    <Home/>
                </Section>
                <Section className="about_section">
                    <About/>
                </Section>
                <Section className="overview_section">
                    <Overview/>
                </Section>
                <Section className="demo_section">
                    <Demo/>
                </Section>
                <Section className="contact_section">
                    <Contact/>
                </Section>
                <Section className="footer_section">
                    <Footer/>
                </Section>
            </SectionsContainer>
        );
    }
}

export default HomePage;