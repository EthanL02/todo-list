function createNewProject(name) {
    const todos = [];

    function addTodo(newTodo) {
        todos.push(newTodo);
    }

    function print() {
        let out = name;
        
        todos.forEach(todo => {
            out += `\n${todo.toString()}`;
        });

        console.log(out);
    }

    return { todos, print, addTodo, name }
}

export default { createNewProject };