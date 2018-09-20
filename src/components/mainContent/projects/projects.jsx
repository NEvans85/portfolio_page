import React from "react";
import ProjectsContent from "../../../Content/projectsContent";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.activeDisplay = "overview";
    this.activeProjectId = 1;

    this.displayContent = this.displayContent.bind(this);
  }

  displayContent() {
    switch (this.activeDisplay) {
      case "overview":
        return;
      case "detail":
        return;
    }
  }

  render() {
    const content = ProjectsContent;

    return (
      <div className="projectsContainer">
        <div className="projectsNavigation">
          {/*
            For each project in content, display the iconImage
            Clicking its image will load the content into the projectContent element
          */}
        </div>
        <div className="projectContent">
          <img src="" alt="" />
          <div className="contentNavigation">
            <div className="showOverview">Overview</div>
            <div className="showDetail">Detail</div>
          </div>
          <div className="projectDisplay">{this.displayContent()}</div>
        </div>
      </div>
    );
  }
}

export default Projects;
