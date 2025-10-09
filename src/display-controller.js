const sideBar = document.getElementById("side-bar");
const newProjectButton = document.getElementById("new-project");
const mainContent = document.getElementById("main-content");

let curProject;

function createProject(project) {
    const button = document.createElement("button");
    button.classList.add("project");
    button.textContent = project.name;

    button.addEventListener("click", () => {
        updateMainContent(project);
    });
    sideBar.prepend(button);
}

function createTodo(todo) {
    const background = document.createElement("div");
    background.classList.add("todo-background");
    mainContent.append(background);
}

function clearSidebar() {
    while (sideBar.firstChild !== newProjectButton) {
        sideBar.removeChild(sideBar.firstChild);
    }
}

function clearMainContent() {
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

function update(projects, newCurProject) {
    curProject = newCurProject !== undefined ? newCurProject : curProject;

    //Load sidebar with each project
    clearSidebar();

    projects.forEach(project => {
        createProject(project);
    });

    //Load main-content with curProject's todos
    updateMainContent(curProject);
}

function updateMainContent(project) {
    clearMainContent();
    project.todos.forEach(todo => {
        createTodo();
    });
}

export default { update };
