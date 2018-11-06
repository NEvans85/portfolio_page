import React from "react";
import ExperienceContent from "../../../content/experience/experienceContent";
import "./experience.css";
import ProjectDetail from "./projectDetail";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProjectId: null,
      content: "",
      cancelInterval: false
    };
    this.content = ExperienceContent;

    this.projectIdToNull = this.projectIdToNull.bind(this);
  }

  handleHover(id) {
    this.setState({ content: this.content[id] });
  }

  handleClick(id) {
    this.setState({ activeProjectId: id });
  }

  projectIdToNull() {
    this.setState({ activeProjectId: null });
    console.log(this.state);
  }

  render() {
    const projectIds = Object.keys(this.content);

    const sideLength = Math.min(window.innerHeight, window.innerWidth) * 0.9;
    if (this.state.activeProjectId) {
      return (
        <ProjectDetail
          content={this.content[this.state.activeProjectId]}
          backFunction={this.projectIdToNull}
        />
      );
    } else {
      return (
        <div
          className="experienceContainer"
          style={{ height: sideLength, width: sideLength }}
        >
          {projectIds.map(id => (
            <img
              key={id}
              style={{ order: id }}
              src={this.content[id].iconImage}
              alt={this.content[id].iconImageAlt}
              onMouseOver={() => this.handleHover(id)}
              onMouseLeave={() =>
                this.setState({
                  activeProjectId: null,
                  cancelInterval: true,
                  content: ""
                })
              }
              onClick={() => this.handleClick(id)}
            />
          ))}

          <div className="projectPreview">
            <p>{this.state.content.name}</p>
            <p>{this.state.content.shortDescription}</p>
            <p>{this.state.content.additionalInfo}</p>
          </div>
        </div>
      );
    }
  }
}

export default Experience;
