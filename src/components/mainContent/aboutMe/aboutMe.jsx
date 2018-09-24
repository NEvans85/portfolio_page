import React from "react";
import AboutMeContent from "../../../content/aboutMe/aboutMeContent";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.content = AboutMeContent;

    this.state = { activeDisplay: "general" };
    this.handleContentNavigation = this.handleContentNavigation.bind(this);
  }

  displayContent() {
    switch (this.state.activeDisplay) {
      case "general":
        return <p>{this.content["general"]}</p>;
      case "education":
        return (
          <div className="education">
            <div className="educationNavigation">
              <button>The Internet</button>
              <button>App Academy</button>
              <button>University of Phoenix</button>
            </div>
          </div>
        );
      default:
        return;
    }
  }

  handleContentNavigation(category) {
    this.setState({ activeDisplay: category });
  }

  render() {
    return (
      <div>
        <div className="contentNavigation">
          <button
            className="showGeneral"
            onClick={() => this.handleContentNavigation("general")}
          >
            General
          </button>
          <button
            className="showEducation"
            onClick={() => this.handleContentNavigation("education")}
          >
            Education
          </button>
        </div>
        <div>{this.displayContent()}</div>
      </div>
    );
  }
}

export default AboutMe;
