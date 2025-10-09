const sideBar = document.getElementById("side-bar");
const newProjectButton = document.getElementById("new-project");
const mainContent = document.getElementById("main-content");

function createProject(project) {
    const button = document.createElement("button");
    button.classList.add("project");
    button.textContent = project.name;

    button.addEventListener("click", () => {
        update(project.todos);
    });
    sideBar.prepend(button);
}

function createTodo(todo) {
    const background = document.createElement("div");
    background.classList.add("todo-background");
    mainContent.append(background);
}

function clear() {
    while (sideBar.firstChild !== newProjectButton) {
        sideBar.removeChild(sideBar.firstChild);
    }

    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

function update(projects, curProject) {
    clear();

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
