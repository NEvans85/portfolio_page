import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import Navigation from "./navigation/navigationContainer";
import AboutMe from "./mainContent/aboutMe/aboutMeContainer";
import Contact from "./mainContent/contact/contactContainer";
import Projects from "./mainContent/projects/projectsContainer";
import Landing from "./mainContent/landing/landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="root_body">
        <header>
          <Route path="/" component={Navigation} />
        </header>
        <div className="mainContent">
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}

export default App;
