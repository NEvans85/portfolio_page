import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <Link to="/aboutMe">About Me</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    );
  }
}

export default Navigation;
