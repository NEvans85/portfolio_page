import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./navigation/navigation";
import AboutMe from "./mainContent/aboutMe/aboutMe";
import Contact from "./mainContent/contact/contact";
import Projects from "./mainContent/projects/projects";
import Landing from "./mainContent/landing/landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="rootBody">
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
