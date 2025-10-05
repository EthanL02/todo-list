import "./styles.css";
import todo from "./todo.js";
import projects from "./projects.js";
import sidebar from "./side-bar";

projects.addProject("My first project");
projects.addProject("My second project0000000");
projects.addProject("My third project");

let curProject = projects.find(0);

const todo1 = todo.createNewTodo("Item # 1", "Description for first item", "4/16/25", 5);
const todo2 = todo.createNewTodo("Item # 2", "Description for second item", "5/07/26", 5);
curProject.addTodo(todo1);
curProject.addTodo(todo2);

console.log(projects.getAll());
sidebar.update(projects.getAll());
