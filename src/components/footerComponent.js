import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Contact Info</h5>
                    <address>
		              {/**<i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />**/}
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:siuesparc@gmail.com">
                         mifrenc@siue.edu</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-instagram" href="https://github.com/SIUE-SPARC"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/siuesparc/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/siuesparc"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/SiueSparc"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCQRt1nBNU-BH2Qv5uIm6a6w"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:siuesparc@siue.edu"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2022 SPARC</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer