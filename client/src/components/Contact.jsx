import React, { Component } from 'react';
import { Grid, Col, Image, Row } from 'react-bootstrap';
import FormContact from './FormContact'

import '../Styles/contact.css'
export default class Home extends Component {
    render() {
        return (<div>
            <div className="content-wrapper">
                <Image src="/assets/img/contact.jpg" />
                <h2 className="heading">Contact Us</h2>

            </div>
            <Grid>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} >
                        <h3>Contact Our Agency</h3>
                        <p>
                            At our Travel Agency, our goal is to ensure that your journey is everything you’ve envisioned. Whether you seek motivation and counsel to plan your upcoming expedition, or require support with an existing reservation, our travel specialists are available to assist. You can contact us via email or phone to secure your flights, organize your excursion, or receive aid with any difficulties you may encounter during your travels.Our support doesn’t conclude once you depart, either. Our worldwide Travel Assistance team is accessible to aid you with any concerns you may encounter.
                        </p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                        <h3>Our contacts </h3>
                        <ul className=" contact-list fa-ul">
                            <li><i class="fas fa-map-marker-alt"></i> 123/21 First Street, Manchester, King Street, Kingston United Kingdom</li>
                            <li><i class="fas fa-phone"></i> 345-677-554</li>
                            <li><i class="fas fa-mobile-alt"></i> 323-678-567</li>
                            <li><i class="far fa-envelope"></i> info@company.com</li>
                        </ul>

                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                        <h3>Any Questions?</h3>
                        <FormContact />
                    </Col>
                </Row>
            </Grid>
        </div>)
    }
}