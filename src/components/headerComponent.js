import React, { useState } from 'react';
import { CarouselControl, Carousel, CarouselItem, CarouselIndicators, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function toggleNav() {
        setIsNavOpen(!isNavOpen);
    }
  return (
    <div>
        <Navbar dark expand="md">
          <div className="container">
              <NavbarToggler onClick={toggleNav} />
              <NavLink to='/home'><NavbarBrand className="mr-auto"><img src={logo} width="auto" height="50" alt='SPARC' /></NavbarBrand></NavLink>
            <Collapse isOpen={isNavOpen} navbar>
                <Nav>
                <NavItem>
                    <NavLink className="nav-link nav-theme"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link nav-theme" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link nav-theme"  to='/events'><span className="fa fa-list fa-lg"></span> Events</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link nav-theme" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
          </div>
        </Navbar>
        
    </div>
  )
}

export default Header;