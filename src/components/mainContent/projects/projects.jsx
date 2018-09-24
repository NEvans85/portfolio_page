import React from "react";
import ProjectsContent from "../../../content/projects/projectsContent";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDisplay: "overview",
      activeProjectId: 1
    };
    this.content = ProjectsContent;
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

  render() {
    return (
      <div className="projectsContainer">
        <div className="projectsNavigation">
          {/*
            For each project in content, display the iconImage
            Clicking its image will load the content into the projectContent element
          */}
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

export default Projects;
