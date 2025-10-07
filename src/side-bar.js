import mainContent from "./main-content.js";

const sideBar = document.getElementById("side-bar");

function update(projects) {
    projects.forEach(project => {
        const button = document.createElement("button");
        button.classList.add("project");
        button.textContent = project.name;

        button.addEventListener("click", () => {
            mainContent.update(project.todos);
        });
        sideBar.prepend(button);
    });
}

export default { update };
