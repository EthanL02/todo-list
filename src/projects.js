import project from "./project.js";

const sideBar = document.getElementById("side-bar");

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