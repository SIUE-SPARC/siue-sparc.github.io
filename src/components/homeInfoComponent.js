import React from 'react';
import "../Stylesheets/Home.css";
import "../Stylesheets/HomeInfo.css";

const HomeInfo = (props) => {
    
    //add an if condition based on props.Align == "left" or sum

    if (props.PhotoAlign == "left") {
        return (
            <div className='branch-info-card'>
                <div className="row">
                    <div className="col-12">
                        <h1>{props.Title}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className='col-12 col-md-7 col-lg-4'>
                        <img className="img-fluid rounded img-ib" src={props.ImageLink} alt={props.Title}></img>
                    </div>
                    <div className='col-12 col-md-5 col-lg-8'>
                        <p>
                            {props.Paragraph}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='branch-info-card'>
                <div className="row">
                    <div className="col-12">
                        <h1>{props.Title}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className='col-12 col-md-5 col-lg-8'>
                        <p>
                            {props.Paragraph}
                        </p>
                    </div>
                    <div className='col-12 col-md-7 col-lg-4 order-first order-md-last'>
                        <img className="img-fluid rounded img-ib" src={props.ImageLink} alt={props.Title}></img>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default HomeInfo;