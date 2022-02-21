import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './aboutusComponent';
import Contact from './contactComponent';
import Events from './eventsComponent';
import Footer from './footerComponent';
import Header from './headerComponent';
import Home from './homeComponent';

const Main = () => {
  return (
    <div>
        <Header />
        <div className='content-theme'>
        <Switch>
              <Route path="/home" component={() => <Home />} />
              <Route exact path="/aboutus" component={() => <AboutUs />} />
              <Route exact path="/events" component={() => <Events />} />
              <Route exact path="/contactus" component={() => <Contact />} />
              <Redirect to="/home" />
        </Switch>
        </div>
        <Footer />
    </div>
  )
}

export default Main;