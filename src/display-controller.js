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

function update(projects) {
    projects.forEach(project => {
        createProject(project);
    });
}

export default { update };
