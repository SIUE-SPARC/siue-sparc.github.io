import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom';


const Contact = () => {
  function handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
}

  return (
      <div className="container">
                <div className="row">
                     <Breadcrumb className="bcrumb-dark">
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                     </Breadcrumb>
                     <div className="col-12">
                         <h3>Contact Us</h3>
                         <hr />
                     </div>
                 </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            Edwardsville, IL<br />
                            United States<br />
                            {/**<i className="fa fa-phone"></i>: +852 1234 5678<br />**/}
                            <i className="fa fa-envelope"></i>: <a href="mailto:mifrenc@siue.edu">mifrenc@siue.edu</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Our Social Media</h5>
                        <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-instagram" href="https://github.com/SIUE-SPARC"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/siuesparc/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/siuesparc"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/SiueSparc"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCQRt1nBNU-BH2Qv5uIm6a6w"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:mfrench@siue.edu"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            {/**<a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>**/}
                            <a role="button" className="btn btn-success" href="mailto:mifrenc@siue.edu"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                
                <div className="row row-content">
                    {/**
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    **/}
                    <div className="col-12 col-md-9">
                        
                    </div>
                </div>
                
            </div>
  )
}

export default Contact