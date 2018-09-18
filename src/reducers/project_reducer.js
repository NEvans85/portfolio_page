import merge from "lodash";

const ProjectReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      newState["projects"] = action.projects;
      return newState;
    default:
      return state;
  }
};

export default ProjectReducer;
