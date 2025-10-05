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

    return { print, addTodo, name }
}

export default { createNewProject };