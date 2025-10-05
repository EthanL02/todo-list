function createNewProject(name) {
    const todos = [];

    function addTodo(newTodo) {
        todos.push(newTodo);
    }

    function getTodos() {
        return todos;
    }

    function print() {
        let out = name;
        
        todos.forEach(todo => {
            out += `\n${todo.toString()}`;
        });

        console.log(out);
    }

    return { getTodos, print, addTodo, name }
}

export default { createNewProject };