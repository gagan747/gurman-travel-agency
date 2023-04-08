import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Col, Image, Button, Row } from 'react-bootstrap';
import TourPlace from "./TourPlace";
import '../Styles/home.css'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Grid>
                        <Jumbotron className='jumbotron'>
                            <h2 style={{ fontSize: '45px' }}>Enjoy Your Dream Vacation</h2>
                            <h3 style={{ fontSize: '27px' }}>Are you dreaming of a vacation but feeling lost in the planning process? Let us help! Our travel agency can take you to any corner of the world without any confusion or hassle.</h3>
                            <Link to="/services">
                                <Button bsStyle="primary" style={{ marginTop: '10px', fontSize: '20px', borderRadius: '12px' }}>More</Button></Link>
                        </Jumbotron>
                    </Grid>
                </div>
                <Grid>


                    <div className="banner text-center">
                        <h2 >The best agency you can choose</h2>
                        <p>We are committed to offering travel services of the highest quality, combining our energy and enthusiasm with years of experience.</p>
                    </div>

                    <TourPlace />

                    <Row className="show-grid text-center">
                        <div className="testimonial">
                            <h1 className="text-center" > What Customers Say</h1>
                            <h5 className="text-center">Our clients’ testimonials are the best proof of our high level of service</h5>
                        </div>


                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="/assets/img/testimony/p1.jpg" circle className="profile-pic" />
                            <h3>Mari Johnson</h3>
                            <p>“Nina was an excellent Travel Agent for us and considered our unique needs as she planned our itinerary. Every suggestion she made was excellent.” </p>
                        </Col>

                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="/assets/img/testimony/p2.jpg" circle className="profile-pic" />
                            <h3>James Anderson</h3>
                            <p>“I would highly recommend Andy because everything on my month long trip to New Zealand, Australia and French Polynesia went without a hitch.”</p>
                        </Col>

                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="/assets/img/testimony/p3.jpg" circle className="profile-pic" />
                            <h3>Becka Steward</h3>
                            <p>“I would highly recommend Andy because everything on my month long trip to New Zealand, Australia and French Polynesia went without a hitch.” </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}