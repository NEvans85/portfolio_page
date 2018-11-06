import React from "react";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.content = props.content;
  }

  render() {
    return (
      <div className="projectDetailContainer">
        <button onClick={() => this.props.backFunction()}>Back</button>
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
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
