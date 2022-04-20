import React, { useState } from 'react';
import { CarouselControl, Carousel, CarouselItem, CarouselIndicators, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import pic2 from "../assets/images/workshop5.jpg";
import pic1 from "../assets/images/workshop1.jpg";
import "../Stylesheets/Home.css";
import HomeInfo from './homeInfoComponent';
import Helmet from 'react-helmet';

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const items = [
    {
      key: 0,
      caption: 'Sample Caption One', src: pic1,
      altText: 'Slide One'
    },
    {
      key: 1,
      caption: 'Sample Caption Two', src: pic2,
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
    <div className=''>

      <Helmet>
        <meta charSet="utf-8" />
        <title>SPARC</title>
      </Helmet>

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

      <div className="container info-margin">
        <HomeInfo
          Title="Web Development"
          ImageLink="https://wallpapercave.com/wp/wp4923992.png"
          Paragraph={
            <p>
              "The Web Development Branch is working together to make this informational website for SPARC. Our main focus for this iteration was front-end development. We are using agile principles, allowing new students to get agile experiemce. Future iterations will have a focus on back-end development. This site has been built with React.js, and is currently hosted by GitHub Pages."
              <br></br><br></br><i>-Cody Schaefer, Web Development Branch Head</i>
            </p>
          }
          PhotoAlign="right"
        />

        <HomeInfo
          Title="Game Development"
          ImageLink="https://i.ytimg.com/vi/bca8rqZsBnk/maxresdefault.jpg"
          Paragraph={
            <p>
              "The Game Development Branch is planning on working on a SIUE themed 2D RPG. The rough idea of what we talked about was a 2D map of SIUE that the player could explore and run into different college/SIUE themed encounters or characters. We will be using the Unity Engine to develop this and we haven't determined any art platform at the moment."
              <br></br><br></br><i>-Sam White, Game Development Branch Head</i>
            </p>
          }
          PhotoAlign="left"
        />

        <HomeInfo
          Title="Mobile App Development"
          ImageLink="https://www.howtogeek.com/wp-content/uploads/2014/09/Android-robot-and-phone.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1"
          Paragraph={
            <p>
              "Mobile App Development is utilizing Android Studio and Java to develop relevant apps to fuel interest in Mobile App Development. The project in question: StudySurv. StudySurv is a work in progress app made for students everywhere to find the best locations for students to study. Peer tested and reviewed, this app will grant people the ability to find areas to relax and study, akin to yelp in a better sense, with the addition of people being able to add locations."
              <br></br><br></br><i>-Sam Msengi, Mobile App Development Branch Head</i>
            </p>
          }
          PhotoAlign="right"
        />

        <HomeInfo
          Title="Cybersecurity"
          ImageLink="https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/cybersecurity%20security%20infosec%20art%20getty.jpg"
          Paragraph={
            <p>
              SPARC's newest branch headed by Ethan Andrews. The Cybersecurity branch will take a look at how to protect sensitive information from cyberattacks.
            </p>
          }
          PhotoAlign="left"
        />

        <HomeInfo
          Title="AMAs"
          ImageLink="https://i.ytimg.com/vi/m5g4exErHnI/maxresdefault.jpg"
          Paragraph={<p>
            SPARC hosts weekly Ask Me Anything's with SIUE Computer Science staff and alumni. The goal of these sessions is to provide an opportunity for the guests to share real-world insight and stories of their careers, and undergraduates can ask questions that they may not have answers to from their school curriculum.
          </p>}
          PhotoAlign="right"
        />

        {/* <BranchInfo
          Title="Test Branch"
          ImageLink="https://cdn1.epicgames.com/offer/fn/PDP_2560x1440_2560x1440-bec2627607d1aeae77fc43d495900ddf"
          Paragraph={<p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus ornare sapien, et convallis urna hendrerit ac. Phasellus scelerisque purus aliquet nunc gravida pulvinar. Duis pharetra volutpat metus, sit amet aliquet justo lacinia scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            <br></br><br></br><i>-Ethan Andrews, Cybersecurity Branch Head</i>
          </p>}
          PhotoAlign="left"
        /> */}

      </div>
    </div>
  );
}

export default Home;