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
              <iframe
                title="calendar"
                src="https://calendar.google.com/calendar/embed?src=siuesparc%40gmail.com&ctz=America%2FChicago"
                style={{border: 0, paddingBottom: 32}}
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
              ></iframe>
          </div>
      </div>
    </div>
  )
}

export default Events