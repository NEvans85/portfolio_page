import React from "react";
import "./projectDetail.css";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.content;

    console.log(content);

    return (
      <div className="projectDetailContainer">
        <div className="projectImages">
          <img src={content.previewImage1} alt={content.previewImage1Alt} />
          <img src={content.previewImage2} alt={content.previewImage2Alt} />
          <img src={content.previewImage3} alt={content.previewImage3Alt} />
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
      </div>
    );
  }
}

export default ProjectDetail;
