import "./styles.css";
import todo from "./todo.js";
import project from "./project.js";
import displayController from "./display-controller.js";

document.documentElement.setAttribute("data-theme", "light");

//project form elements
const projectDialog = document.getElementById("project-dialog");
const projectSubmitButton = projectDialog.querySelector("button");

projectSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    projectDialog.close();
});

const projects = [];

function addProject(newProject) {
    projects.push(project.createNewProject(newProject));
}

projectDialog.showModal();

addProject("My first project");
addProject("My second project");
addProject("My third project");

let curProject = projects[0];

const todo1 = todo.createNewTodo("Item # 1", "Description for first item", "4/16/25", 5);
const todo2 = todo.createNewTodo("Item # 2", "Description for second item", "5/07/26", 5);
curProject.addTodo(todo1);
curProject.addTodo(todo2);

displayController.update(projects, curProject);
