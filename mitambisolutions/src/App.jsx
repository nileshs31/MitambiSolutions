import React from 'react'
import { Route, Switch } from "react-router-dom";

import "../src/css/mycss.css"

import Header from './Header';
import Admin from './Admin';
import Home from './Home';
import Ourwork from './Ourwork';
import Careers from './Careers';
import Contactus from './Contactus';
import Error from './Error';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/ourwork" component={Ourwork} />
        {/* <Route exact path="/ourwork" component={Mitambicares} />
        <Route exact path="/ourwork" component={Mightyhardstudios} />
        <Route exact path="/ourwork" component={Team} />*/}
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contactus" component={Contactus} />
        <Route component={Error} />

      </Switch>
      <Footer />
    </>


  );
}

export default App;
