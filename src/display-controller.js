const sideBar = document.getElementById("side-bar");
const mainContent = document.getElementById("main-content");

function createProject(project) {
    const button = document.createElement("button");
    button.classList.add("project");
    button.textContent = project.name;

    button.addEventListener("click", () => {
        mainContent.update(project.todos);
    });
    sideBar.prepend(button);
}

function createTodo(todo) {
    const background = document.createElement("div");
    background.classList.add("todo-background");
    mainContent.append(background);
}

function update(projects, curProject) {
    //Load sidebar with each project
    projects.forEach(project => {
        createProject(project);
    });

    //Load main-content with curProject's todos
    curProject.todos.forEach(todo => {
        createTodo(todo);
    });
}

export default { update };
