import React from "react";
import AboutMeContent from "../../../content/aboutMe/aboutMeContent";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.content = AboutMeContent;
  }

  handleContentNavigation(category) {
    this.setState({ activeDisplay: category });
  }

  render() {
    return (
      <div className="aboutMeContainer">
        <div>{this.content.general}</div>
      </div>
    );
  }
}

export default AboutMe;
