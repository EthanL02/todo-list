function createNewTodo(title, description, dueDate, priority) {
    function print() {
        console.log({ title, description, dueDate, priority });
    }

    function toString() {
        return JSON.stringify({ title, description, dueDate, priority });
    }

    return { print, toString };
}

export default { createNewTodo };