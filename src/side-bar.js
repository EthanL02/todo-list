import mainContent from "./main-content.js";

const sideBar = document.getElementById("side-bar");

function update(projects) {
    projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project");
        const newProject = document.createElement("h3");
        div.append(newProject);
        newProject.textContent = project.name;

        div.addEventListener("click", () => {
            mainContent.update(project.todos);
        });

        sideBar.append(div);
    });
}

export default { update };
