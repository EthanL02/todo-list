const sideBar = document.getElementById("side-bar");

function update(projects) {
    projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project");
        const newProject = document.createElement("h3");
        div.append(newProject);
        newProject.textContent = project.name;

        sideBar.append(div);
    });
}

export default { update };
