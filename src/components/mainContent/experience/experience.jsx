import React from "react";
import ExperienceContent from "../../../content/experience/experienceContent";
import "./experience.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProjectId: 0,
      content: "",
      cancelInterval: false
    };
    this.content = ExperienceContent;
  }

  handleHover(id) {
    this.setState({ activeProjectId: id, content: this.content[id] });
  }

  render() {
    const projectIds = Object.keys(this.content);

    const sideLength = window.innerHeight * 0.9;
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
                cancelInterval: true,
                content: ""
              })
            }
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

export default Experience;
