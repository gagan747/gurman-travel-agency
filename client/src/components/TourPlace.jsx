import React, { Component } from 'react';
import { Thumbnail, Grid, Col, Button, Row } from 'react-bootstrap';
import '../Styles/home.css'
export default class TourPlace extends Component {
    render() {
        return (

            <Grid>

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="place">
                        <Thumbnail src="assets/img/places/spain.jpg" alt="242x200">
                            <h3>Spain</h3>
                            <p>Berlin, Munich • 9 days Embark on your Eastern Europe adventure from Berlin - a city that boasts an undeniable charm. Proceed to Warsaw - the capital of Poland, where you can explore the city's top attractions and museums with the help of a local guide.</p>
                            <p>
                                <Button bsStyle="primary">More</Button>
                            </p>
                        </Thumbnail>
                    </Col>

                    <Col xs={12} sm={4} className="place">
                        <Thumbnail src="assets/img/places/england.jpg" alt="242x200">
                            <h3>United Kingdom</h3>
                            <p>Greece, Italy, Spain • 13 days Embark on your Mediterranean journey from Athens - one of the most captivating cities in Europe. Head to Rome - the eternal city, where you can explore its rich history and indulge in the delicious Italian cuisine.</p>
                            <p>
                                <Button bsStyle="primary">More</Button>
                            </p>
                        </Thumbnail>
                    </Col>

                    <Col xs={12} sm={4} className="place">
                        <Thumbnail src="assets/img/places/turkey.jpg" alt="242x200">
                            <h3>Turkey</h3>
                            <p>Paris, Nice, Marseille • 8 days Explore the best of France's most beautiful cities starting from the charming city of Paris, then heading south to the sun-soaked beaches of Nice and finally to the vibrant city of Marseille, known for its rich cultural heritage and stunning architecture.</p>
                            <p>
                                <Button bsStyle="primary">More</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        )
    }
}