export const fetchProjects = () => {
  return $.ajax({
    method: "GET",
    url: "api/project"
  });
};
