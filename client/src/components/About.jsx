import React, { Component } from 'react';
import { Grid, Col, Image, Row } from 'react-bootstrap';
import '../Styles/about.css'

export default class About extends Component {
  render() {
    return (
      <div>

        <div className="content-wrapper">
          <Image src="/assets/img/about.jpg" />
          <h2 className="heading">About Us </h2>

        </div>
        <div style={{ margin: '20px 150px', display: 'flex', flexWrap: 'wrap', alignItems: 'start', justifyContent:'center', alignItems:'start' }} className='about-img-container'>
          <div style={{ flex: '0 0 auto', width: '290px', height: '250px' }}>
            <img src="/assets/img/travel.jpg" style={{ width: '100%', height: '100%', borderRadius: '70%' }} />
          </div>
          <div style={{ flex: '1 1 300px', padding: '0px 20px' }}>
            <h3 style={{textAlign: 'center'}}>Trade With Us</h3>
            <p>
              At Gainify, we are committed to helping our clients achieve their financial goals by investing wisely in the financial markets. Our mission is to provide strong returns and ensure financial freedom for individuals, families, and companies alike.

              We understand the importance of financial knowledge and aim to spread awareness to empower our clients to make informed decisions. Many individuals face challenges in the markets due to a lack of knowledge, and we're here to bridge that gap.

              While we are at the beginning stage of our journey, we are determined to do much more. Join us on this incredible adventure towards financial success!
            </p>
          </div>
        </div>

    
        <Grid fluid className="team" >

          <h1 className="text-center" > Our team</h1>
          <h5 className="text-center">An experienced team of people passionate about traveling</h5>
          <Grid>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="/assets/img/person1.jpg" circle className="profile-pic" />
                <h3>Mari Johnson</h3>
                <h5>Founder and Director</h5>
                <p>“Nina was an excellent Travel Agent for us and considered our unique needs as she planned our itinerary. Every suggestion she made was excellent.” </p>
              </Col>

              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="/assets/img/person3.jpg" circle className="profile-pic" />
                <h3>James Anderson</h3>
                <h5>Senior Travel Agent</h5>
                <p>“I would highly recommend Andy because everything on my month long trip to New Zealand, Australia and French Polynesia went without a hitch.”</p>
              </Col>

              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="/assets/img/person2.jpg" circle className="profile-pic" />
                <h3>John Smith</h3>
                <h5>Hotel Agent</h5>
                <p>“I would highly recommend Andy because everything on my month long trip to New Zealand, Australia and French Polynesia went without a hitch.” </p>
              </Col>
            </Row>
          </Grid>

        </Grid>



      </div>
    )
  }
}