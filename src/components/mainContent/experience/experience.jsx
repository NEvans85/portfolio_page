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
    this.setActiveProjectId = this.setActiveProjectId.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleHover(id) {
    this.setState({ content: this.content[id] });
  }

  handleNavigation(option) {
    const activeId = this.state.activeProjectId;
    switch (option) {
      case "prev":
        this.setActiveProjectId(activeId === 1 ? 8 : activeId - 1);
        break;
      case "next":
        this.setActiveProjectId(activeId === 8 ? 1 : activeId + 1);
        break;
      case "menu":
        this.projectIdToNull();
        break;
    }
  }

  setActiveProjectId(id) {
    this.setState({ activeProjectId: id });
  }

  projectIdToNull() {
    this.setState({ activeProjectId: null });
  }

  render() {
    const projectIds = Object.keys(this.content);

    const menuSideLength =
      Math.min(window.innerHeight, window.innerWidth) * 0.9;

    const activeId = this.state.activeProjectId;

    return (
      <div className="experienceContainer">
        {activeId ? (
          <ProjectDetail
            content={this.content[activeId]}
            navFunction={this.handleNavigation}
          />
        ) : (
          <div
            className="projectsMenu"
            style={{ height: menuSideLength, width: menuSideLength }}
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
                onClick={() => this.setActiveProjectId(parseInt(id))}
              />
            ))}
            {/* projectPreview is set in the center of the menu via CSS */}
            <div className="projectPreview">
              <p>{this.state.content.name}</p>
              <p>{this.state.content.shortDescription}</p>
              <p>{this.state.content.additionalInfo}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
