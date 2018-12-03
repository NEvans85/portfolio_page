import React from "react";
import "./projectDetail.css";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.content;

    return (
      <div className="projectDetailContainer">
        <div className="projectImages">
          {content.previewImages.map(imageData => (
            <img key={imageData[0]} src={imageData[0]} alt={imageData[1]} />
          ))}
        </div>
        <div className="projectDetails">
          <h2>{content.name}</h2>
          <p>{content.longDescription}</p>
          {content.type == "Project" && (
            <div className="projectLinks">
              <a href={content.liveLink}>Link to Live Project</a>
              <a href={content.repoLink}>Link to Github Repo</a>
            </div>
          )}
        </div>
        <div className="experienceNavigation">
          <button
            className="prevButton"
            onClick={() => this.props.navFunction("prev")}
          >
            Previous
          </button>
          <button
            className="menuButton"
            onClick={() => this.props.navFunction("menu")}
          >
            Menu
          </button>
          <button
            className="nextButton"
            onClick={() => this.props.navFunction("next")}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
