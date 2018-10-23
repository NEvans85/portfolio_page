import React from "react";
import ExperienceContent from "../../../content/experience/experienceContent";
import "./experience.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDisplay: "overview",
      activeProjectId: 1
    };
    this.content = ExperienceContent;
    this.displayContent = this.displayContent.bind(this);
  }

  displayContent() {
    const activeProject = this.content[this.state.activeProjectId];
    switch (this.state.activeDisplay) {
      case "overview":
        return (
          <div className="projectOverview">
            <p className="projectTitle">Project Name: {activeProject.name}</p>
            <p>{activeProject.shortDescription}</p>
            <p>Live Link: {activeProject.liveLink}</p>
            <p>Github Repo: {activeProject.repoLink}</p>
          </div>
        );
      case "detail":
        return <p>{activeProject.longDescription}</p>;
      default:
        return;
    }
  }

  handleContentNavigation(category) {
    this.setState({ activeDisplay: category });
  }

  setActiveProject(id) {
    this.setState({ activeProjectId: id });
  }

  render() {
    let projectIds = Object.keys(this.content);
    return (
      <div className="experienceContainer">
        <div className="experienceNavigation">
          {projectIds.map(id => (
            <img
              key={id}
              src={this.content[id].iconImage}
              alt={this.content[id].iconImageAlt}
              onMouseOver={() => this.setActiveProject(id)}
            />
          ))}
        </div>
        <div className="projectContent">
          <img className="activeProjectImage" src="" alt="" />
          <div className="contentNavigation">
            <button
              className="showOverview"
              onClick={() => this.handleContentNavigation("overview")}
            >
              Overview
            </button>
            <button
              className="showDetail"
              onClick={() => this.handleContentNavigation("detail")}
            >
              Detail
            </button>
          </div>
          <div className="projectDisplay">{this.displayContent()}</div>
        </div>
      </div>
    );
  }
}

export default Experience;
