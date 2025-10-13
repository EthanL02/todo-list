import "./styles.css";
import todo from "./todo.js";
import project from "./project.js";
import displayController from "./display-controller.js";

document.documentElement.setAttribute("data-theme", "light");

//project form elements
const projectDialog = document.getElementById("project-dialog");
const projectSubmitButton = projectDialog.querySelector("button");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectPriority = document.getElementById("project-priority");

projectSubmitButton.addEventListener("click", (event) => {
    if (projectTitle.value !== "") {
        addProject(projectTitle.value, projectPriority.value);

        event.preventDefault();
        projectDialog.close();
    }
});

//todo form elements
const todoDialog = document.getElementById("todo-dialog");
const todoSubmitButton = todoDialog.querySelector("button");
const todoTitle = document.getElementById("todo-title");
const todoDescription = document.getElementById("todo-description")
const todoDueDate = document.getElementById("todo-due-date")
const todoPriority = document.getElementById("todo-priority");

todoSubmitButton.addEventListener("click", (event) => {
    if (todoTitle.value !== "") {
        console.log("new todo");

        event.preventDefault();
        todoDialog.close();
    }
});

//main content
const newTodoButton = document.getElementById("new-todo");
newTodoButton.addEventListener("click", () => {
    todoDialog.showModal();
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
