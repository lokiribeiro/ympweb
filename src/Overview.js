import React, { Component } from "react";
import {
    Container, Row, Col, Table
} from 'react-bootstrap';
import logbook from "./images/Icons/Lobgook.png";
import equipment from "./images/Icons/Equipment.png";
import jobs from "./images/Icons/Jobs.png";
import inventory from "./images/Icons/Inventory.png";
import reports from "./images/Icons/Reports.png";
import employees from "./images/Icons/Employees.png";
import guests from "./images/Icons/Guests.png";
import suppliers from "./images/Icons/Suppliers.png";
import hours_admin from "./images/Icons/Hours.png";
import ism from "./images/Icons/ISM.png";
import vessel_documents from "./images/Icons/Vessel.png";
import watchkeep from "./images/Icons/watch.png";

class Overview extends Component {
    render() {
        return (
            <div className="component_content overview">
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={logbook} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                LOGBOOK
                                            </p>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={equipment} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                EQUIPMENT
                                            </p>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={jobs} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                JOBS
                                            </p>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={inventory} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                INVENTORY
                                            </p>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={reports} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                REPORTS
                                            </p>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={employees} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                EMPLOYEES
                                            </p>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={guests} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                GUESTS
                                            </p>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={suppliers} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                SUPPLIERS
                                            </p>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={hours_admin} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                HOURS ADMIN
                                            </p>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={ism} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                ISM
                                            </p>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={vessel_documents} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                VESSEL<br></br>DOCUMENTS
                                            </p>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center icons">
                                            <div className="icons-image"><img src={watchkeep} alt="" width="38"/></div>
                                            <p className="icons-text">
                                                WATCHKEEP
                                            </p>
                                        </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="overview-text">
                                <h5>
                                    Technical Support
                                </h5>
                                <p className="font-weight-light">
                                Call or email us and we will assist you with any questions you may have regarding YMP.
                                Training for usage of the program can also be arranged via Skype.
                                </p>
                                <h5>
                                    Free Updates and Daily Backup
                                </h5>
                                <p className="font-weight-light">
                                Updates are included to improve performance, stability and security, as well additional new features for your program.
                                Daily backup feature to ensure your data is safe and secure.
                                </p>
                                <h5>
                                    ISM Package
                                </h5>
                                <p className="font-weight-light">
                                An ISM package with forms, checklists and scheduled checks can be provided with your program.
                                </p>
                                <h5>
                                    Setup of Engineering Equipment and Jobs
                                </h5>
                                <p className="font-weight-light">
                                By arrangement we can set up the basic engineering equipment with the scheduled maintenance jobs and appertaining manuals.
                                </p>
                                <h5>
                                    Basic equipment includes:
                                </h5>
                                <p className="font-weight-light">
                                ¤ Main Engines
                                ¤ Generators
                                ¤ Propulsion Gears
                                ¤ Fuel Separator/Clarifier
                                ¤ Oily Water Separator
                                ¤ Jet Skies
                                ¤ Watermakers
                                ¤ Stabilizers
                                ¤ Hi-Fog/Water
                                ¤ Air Compressors
                                ¤ Sewage Treatment Systems
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Overview;