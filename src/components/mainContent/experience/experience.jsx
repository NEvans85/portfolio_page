import React from "react";
import ExperienceContent from "../../../content/experience/experienceContent";
import "./experience.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProjectId: 0,
      contentDisplay: "",
      cancelInterval: false
    };
    this.content = ExperienceContent;
  }

  handleHover(id) {
    this.setState({ activeProjectId: id });

    const toDisplay = Array.from(this.content[id].shortDescription);

    let contentDisplayInterval = () => {
      const intervalId = setInterval(() => {
        if ((this.state.activeProjectId !== id) | this.state.cancelInterval) {
          clearInterval(intervalId);
          this.setState({ cancelInterval: false });
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
              onMouseLeave={() =>
                this.setState({ cancelInterval: true, contentDisplay: "" })
              }
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
