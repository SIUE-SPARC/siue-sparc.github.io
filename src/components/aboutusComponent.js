import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import pres from '../assets/images/ExecBoard/michael.png';
import vp from '../assets/images/ExecBoard/andrew.png';
import dp from '../assets/images/ExecBoard/scott.png';
import dc from '../assets/images/ExecBoard/morgan.png';
import dl from '../assets/images/ExecBoard/ryan.png';
import t from '../assets/images/ExecBoard/evan.png';
import '../Stylesheets/AboutUs.css';


const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb className="bcrumb-dark">
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
          <p>
            SPARC is an organization open to any students interested in
            computer science or modern day technologies. The purpose of the
            organization is to create leaders who have the skills, ability,
            and want to utilize technology to enact positive change within
            society. We also strive to demonstrate the importance of
            interdisciplinary collaboration between computer science and all
            other disciplines, while also building a community for students at
            SIUE. We provide a supportive organization where students can
            develop and grow academically, professionally, and personally.
          </p>
        </div>
        <div className="col-12">
          {/*
            The Who we are section is made up of three columns, each with
            images of the exec board members.
          */}
          <h3>Who We Are</h3>
          <div className='who-we-are'>
            <figure>
              <img src={pres} alt="President" />
              <figcaption>President: Michael French</figcaption>
            </figure>
            <figure>
              <img src={vp} alt="Vice President" />
              <figcaption>Vice President: Andrew Milloshewski</figcaption>
            </figure>
            <figure>
              <img src={dp} alt="Director of Projects" />
              <figcaption>Director of Projects: Scott Delozier</figcaption>
            </figure>
            <figure>
              <img src={dc} alt="Director of Community" />
              <figcaption>Director of Community: Morgan Jackson</figcaption>
            </figure>
            <figure>
              <img src={dl} alt="Director of Leadership" />
              <figcaption>Director of Leadership: Ryan Monohan</figcaption>
            </figure>
            <figure>
              <img src={t} alt="Treasurer" />
              <figcaption>Treasurer: Evan Rohlfs</figcaption>
            </figure>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default AboutUs