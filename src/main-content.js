const mainContent = document.getElementById("main-content");
const emptyLabel = mainContent.querySelector("h2");

function update(todos) {
    console.log(todos);
    if (todos.length !== 0) {
        emptyLabel.style.display = "none";
    } else {
        emptyLabel.style.display = "block";
    }
}

export default { update };