import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-page">
        <div className="name">
          <p className="fName">NICK</p>
          <p className="lName">EVANS</p>
        </div>
        <div className="landingNavigation">
          <Link to="/aboutMe">About Me</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    );
  }
}

export default Landing;
