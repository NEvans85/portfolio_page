import React from "react";
import "./projectDetail.css";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.content = props.content;
  }

  render() {
    return (
      <div className="projectDetailContainer">
        <div className="projectImages">
          <img
            src={this.content.previewImage1}
            alt={this.content.previewImage1Alt}
          />
          <img
            src={this.content.previewImage2}
            alt={this.content.previewImage2Alt}
          />
          <img
            src={this.content.previewImage3}
            alt={this.content.previewImage3Alt}
          />
        </div>
        <div className="projectDetails">
          <p>{this.content.longDescription}</p>
          {this.content.type == "Project" && (
            <div className="projectLinks">
              <a href={this.content.liveLink}>Link to Live Project</a>
              <a href={this.content.repoLink}>Link to Github Repo</a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
