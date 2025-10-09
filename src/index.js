import "./styles.css";
import todo from "./todo.js";
import project from "./project.js";
import displayController from "./display-controller.js";

document.documentElement.setAttribute("data-theme", "light");

//project form elements
const projectDialog = document.getElementById("project-dialog");
const projectSubmitButton = projectDialog.querySelector("button");
const title = document.getElementById("title");
const priority = document.getElementById("priority");

projectSubmitButton.addEventListener("click", (event) => {
    if(title.value !== "") {
        addProject(title.value, priority.value);

        console.log(projects);
        event.preventDefault();
        projectDialog.close();
    }
});

//side panel
const newProjectButton = document.getElementById("new-project");
newProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
});

const projects = [];
let curProject;

function addProject(newProject) {
    curProject = project.createNewProject(newProject);
    projects.push(curProject);
    displayController.update(projects, curProject);
}

addProject("My first project");
addProject("My second project");
addProject("My third project");

const todo1 = todo.createNewTodo("Item # 1", "Description for first item", "4/16/25", 5);
const todo2 = todo.createNewTodo("Item # 2", "Description for second item", "5/07/26", 5);
curProject.addTodo(todo1);
curProject.addTodo(todo2);

displayController.update(projects, curProject);
