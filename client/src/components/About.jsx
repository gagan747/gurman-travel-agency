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
        <Grid>
          <Col xs={12} sm={8} smOffset={2}    >
            <Image src="/assets/img/travel.jpg" className="about-pc" rounded />
            <h3>Explore. Journey. Thrill</h3>

            <p>Our company is dedicated to providing top-quality travel services, which combine our experience with our passion and energy. We take great pride in our ability to cater to a vast number of clients who have been thoroughly satisfied by the joy and inspiration that comes with traveling.</p>

            <p>We strive to improve our behavior in every aspect, never settling for anything less than excellence. Our commitment to delivering the best travel experiences is unwavering, and we take every precaution necessary to ensure that our clients' journeys are comfortable and worry-free.
              Our company ethos is centered around compassion and empathy, and we understand that each traveler has unique needs and preferences. We take great care to offer personalized services that cater to individual needs.

            </p><p>  We believe that travel should be a source of inspiration and enrichment, which is why we are passionate about providing exceptional travel experiences. Our focus is on creating lasting memories for our clients, and we do so by offering a wide range of travel packages that cater to diverse interests and preferences.

              We take pride in our professionalism, and we are committed to delivering the best travel experiences in the industry. Our reputation is built on a foundation of honesty, integrity, and a deep commitment to excellence.</p>
            <p>We also understand that travel can be stressful, which is why we take every step necessary to ensure our clients' peace of mind. From pre-trip planning to on-site support, we are here to make our clients' travels as seamless and enjoyable as possible.

              Our commitment to sustainability is another core value of our company. We believe that travel should be responsible and respectful of the planet and its people. That's why we work with local communities and businesses to ensure that our travel experiences are sustainable and have a positive impact.</p>
            <p>Whether you're traveling solo, with friends or family, or as part of a corporate group, we have the expertise and resources to create a truly unforgettable experience. Our travel packages are designed to cater to a wide range of budgets and interests, ensuring that everyone can enjoy the wonders of travel.

            </p><p> In conclusion, our company is dedicated to providing exceptional travel experiences that inspire and enrich our clients' lives. We are passionate about what we do, and we believe that our commitment to excellence sets us apart from other travel providers. We invite you to explore our offerings and discover the joy and inspiration of travel with us.</p>
          </Col>
        </Grid>

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