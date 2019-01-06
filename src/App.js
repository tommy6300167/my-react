import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';

import Home from './Page/HomePage/home'
import About from './Page/AboutMe/aboutme'
import Project from './Page/MyProject/project'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          
          <NavBar />

          <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/aboutTom" component={About}/>
          <Route exact path="/myProject" component={Project}/>

          </div>

          <Footer />

          </React.Fragment>

      </BrowserRouter>
    );
  }
}

export default App;
