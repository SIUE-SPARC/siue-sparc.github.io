import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import pic1 from "../assets/images/profile.png";

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
          <div style={{ width: '33%', display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
            <div style={{width: '33%'}}>
              <img  src={pic1} alt="President" />
              <h4>President: Michael French</h4>
            </div>
            <div style={{width: '33%'}}><img src={pic1} alt="Vice President" />
              <h4>Vice President: Andrew Milloshewski</h4></div>
            <div>Column 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs