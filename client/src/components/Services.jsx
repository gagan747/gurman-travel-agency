import React, { Component } from 'react';
import {Thumbnail,Grid,Col,Image,Button,Row} from 'react-bootstrap';
import '../Styles/services.css'
export default class Home extends Component{
    render(){
        return( <div>
        <div className="content-wrapper">    
                <Image src="/assets/img/services.jpg" />
                <h2 className="heading">Our services</h2>              
                <h5 className="sub-heading" style={{marginTop:'28px'}}>With us you’ll find a perfect destination among hundreds available.</h5>
                
            </div>
           <Grid>
            <Row className= "show-grid text-center" style={{display:'flex', justifyContent:'center'}}>
                 <Col xs={12} sm={3} className="place">
                    <Thumbnail style={{height:'400px'}}>
                            <i class="fas fa-solid fa-money-check fa-7x"></i>
                        <h3>FUND MANAGEMENT</h3>
                            <p>
                                We provide fund management with potential returns ranging from 8% to 220%.

                                No profit sharing: all returns are yours.

                                Withdraw your profits every month.

                                Best financial support available.
</p>
                        
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                </Col>

                 <Col xs={12} sm={3} className="place">
                        <Thumbnail style={{ height: '400px' }}>
                            <i class="fas fa-file-invoice fa-7x"></i>
                        <h3>ACCOUNT MANAGEMENT</h3>
                            <p>
                                We provide account management services with potential returns of up to 10% monthly.

                                No upfront fees required.

                                50-50 Profit sharing: we only earn when we generate profits in your account.</p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                </Col>

                 {/* <Col xs={12} sm={3} className="place">
                    <Thumbnail >
                    <i class="fas fa-hotel fa-7x"></i>
                        <h3>HOTEL BOOKINGS</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                         <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                </Col>

                 <Col xs={12} sm={3} className="place">
                    <Thumbnail>
                        <i class="fas fa-sun fa-7x"></i>
                        <h3>SUMMER TOURS</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                </Col> */}

                   

                   
                </Row>
                   </Grid>
                 
                   </div>
            )}}