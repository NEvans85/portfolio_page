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
            <img key={imageData.url} src={imageData.url} alt={imageData.alt} />
          ))}
        </div>
        <div className="projectDetails">
          <h2>{content.name}</h2>
          <p>{content.longDescription}</p>
          <div className="projectLinks">
            {content.links.map(linkData => (
              <a key={linkData.url} href={linkData.url}>
                {linkData.label}
              </a>
            ))}
          </div>
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
