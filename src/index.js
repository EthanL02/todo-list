import "./styles.css";
import todo from "./todo-creator.js";
import project from "./project-creator.js";

const demoProject = project.createNewProject("My first project");
demoProject.print();

const todo1 = todo.createNewTodo("Item # 1", "Description for first item", "4/16/25", 5);
const todo2 = todo.createNewTodo("Item # 2", "Description for second item", "5/07/26", 5);

demoProject.addTodo(todo1);
demoProject.addTodo(todo2);
demoProject.print();