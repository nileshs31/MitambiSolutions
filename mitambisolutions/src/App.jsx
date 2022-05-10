import React from 'react'
import { Route, Switch } from "react-router-dom";

import "../src/css/mycss.css"


import Admin from './Admin';
import Home from './Home';
import Ourwork from './Ourwork';
import Careers from './Careers';
import Contactus from './Contactus';
import Error from './Error';

import Learn from './Learn';
import Marketing from './Marketing';


function App() {
  return (
    <>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/ourwork" component={Ourwork} />
        {/* <Route exact path="/ourwork" component={Mitambicares} />
        <Route exact path="/ourwork" component={Mightyhardstudios} />
        <Route exact path="/ourwork" component={Team} />*/}


        <Route exact path="/careers" component={Careers} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/marketing" component={Marketing} />
        <Route component={Error} />
      </Switch>
      
    </>


  );
}

export default App;
