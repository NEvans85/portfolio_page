import React from "react";
import ExperienceContent from "../../../content/experience/experienceContent";
import "./experience.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDisplay: "overview",
      activeProjectId: 1,
      contentDisplay: ""
    };
    this.content = ExperienceContent;
  }

  handleContentNavigation(category) {
    this.setState({ activeDisplay: category });
  }

  handleHover(id) {
    this.setState({ activeProjectId: id });

    const toDisplay = Array.from(this.content[id].shortDescription);

    let contentDisplayInterval = () => {
      const intervalId = setInterval(() => {
        if (this.state.activeProjectId != id) {
          clearInterval(intervalId);
        } else if (toDisplay.length > 0) {
          let content = this.state.contentDisplay;
          content += toDisplay.shift();
          this.setState({ contentDisplay: content });
        } else {
          clearInterval(intervalId);
        }
      }, 100);
    };
    contentDisplayInterval();
  }

  render() {
    const projectIds = Object.keys(this.content);
    return (
      <div className="experienceContainer">
        <div className="experienceNavigation">
          {projectIds.map(id => (
            <img
              key={id}
              src={this.content[id].iconImage}
              alt={this.content[id].iconImageAlt}
              onMouseOver={() => this.handleHover(id)}
              onMouseLeave={() => this.setState({ contentDisplay: "" })}
            />
          ))}
        </div>
        <div className="projectContent">
          <img className="activeProjectImage" src="" alt="" />
          <div className="projectPreview">
            <p>{this.state.contentDisplay}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
