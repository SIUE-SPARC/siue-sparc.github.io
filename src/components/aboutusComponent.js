import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom';

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
        </div>
      </div>
    </div>
  );
}

export default AboutUs