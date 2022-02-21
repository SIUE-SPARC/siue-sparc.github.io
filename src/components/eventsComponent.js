import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom';

const Events = () => {
  return (
    <div className="container">
      <div className="row">
          <Breadcrumb className="bcrumb-dark">
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Events</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>Events</h3>
              <hr />
          </div>
      </div>
    </div>
  )
}

export default Events