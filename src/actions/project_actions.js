import * as ProjectsApiUtil from "../util/projects_api_util";

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});
