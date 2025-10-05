import project from "./project.js";

const projects = [];

function addProject(newProject) {
    projects.push(project.createNewProject(newProject));
}

function getAll() {
    return projects;
}

function find(index) {
    return projects[index];
}

export default { addProject, getAll, find };