import project from "./project-creator.js";

const sideBar = document.getElementById("side-bar");

const projects = [];

function addProject(newProject) {
    projects.push(project.createNewProject(newProject));
}

function getAll() {
    return projects;
}

function get(index) {
    return projects[index];
}

export default { addProject, getAll, get };