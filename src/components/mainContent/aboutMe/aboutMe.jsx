import React from "react";
import AboutMeContent from "../../../content/aboutMeContent";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeDisplay: "general" };
  }

  displayContent() {
    switch (this.state.activeDisplay) {
      case "general":
        return;
      case "education":
        return;
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
        <div>{() => this.displayContent()}</div>
      </div>
    );
  }
}

export default AboutMe;
