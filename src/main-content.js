const mainContent = document.getElementById("main-content");
const emptyLabel = mainContent.querySelector("h2");

function update(todos) {
    if (todos.length !== 0) {
        emptyLabel.style.display = "none";
        console.log(todos);
        todos.forEach(todo => {
            displayTodo(todo);
        });
    } else {
        emptyLabel.style.display = "block";
    }
}

function displayTodo(todo) {
    const background = document.createElement("div");
    background.classList.add("todo-background");
    mainContent.append(background);
}

export default { update };