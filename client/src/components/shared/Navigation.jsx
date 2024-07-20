import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem,Image} from 'react-bootstrap';
import '../../Styles/navigation.css'



export default class Navigation extends Component{
    render(){
        return(
            <Navbar  fixed="top" default collapseOnSelect className='navbar'>
                <Navbar.Header className='navbar-main'>
                <Navbar.Brand className='navbar-brand'>
                <Link to="/"><Image className="logo"src="/assets/logo.jpeg" style={{width:'120px',height:'20px'}}/> </Link>
                </Navbar.Brand>
                <Navbar.Toggle className='navbar-toggle'/>
                </Navbar.Header >
                <Navbar.Collapse >
                    <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                    Home
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                    About
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/services" to="/services">
                    Services
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} href="/contact" to="/contact">
                    Contact
                    </NavItem>
                    </Nav>
           </Navbar.Collapse>
           </Navbar>
        )
    }
}