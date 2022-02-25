import React, { useState } from 'react';
import { CarouselControl, Carousel, CarouselItem, CarouselIndicators, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import pic2 from "../assets/images/workshop5.jpg";
import pic1 from "../assets/images/workshop1.jpg";

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const items = [
      {
          key:0,
          caption: 'Sample Caption One',src:pic1,
          altText: 'Slide One'
      },
      {
        key:1,
          caption: 'Sample Caption Two',src:pic2,
          altText: 'Slide Two'
      }
  ];
  const itemLength = items.length - 1

  const previousButton = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ?
          itemLength : activeIndex - 1;
      setActiveIndex(nextIndex);
  }

  const nextButton = () => {
      if (animating) return;
      const nextIndex = activeIndex === itemLength ?
          0 : activeIndex + 1;
      setActiveIndex(nextIndex);
  }

  const carouselItemData = items.map((item) => {
      return (
          <CarouselItem
              className="text-center"
              key={item.key}
              onExited={() => setAnimating(false)}
              onExiting={() => setAnimating(true)}
          >
              <img width="400" height="300" src={item.src} alt={item.altText} />
          </CarouselItem>
      );
  });

  return (
    <div>
      <Jumbotron>
        <div className="container">
          <Carousel
            previous={previousButton}
            next={nextButton}
            activeIndex={activeIndex}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={(newIndex) => {
                if (animating) return;
                setActiveIndex(newIndex);
              }}
            />
            {carouselItemData}
            <CarouselControl
              directionText="Prev"
              direction="prev"
              onClickHandler={previousButton}
            />
            <CarouselControl
              directionText="Next"
              direction="next"
              onClickHandler={nextButton}
            />
          </Carousel>
        </div>
      </Jumbotron>
      <div className="container">
        <div className="row row-header">
          <div className="col-12 col-sm-6">
            <h1>SIUE Programming and Research Collaboration</h1>
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
        </div>
      </div>
    </div>
  );
}

export default Home;