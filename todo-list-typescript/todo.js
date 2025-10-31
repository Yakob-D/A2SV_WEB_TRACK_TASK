var tasks = [];
var nextId = 1;
function addTodo(text) {
    if (!text.trim()) {
        throw new Error("Can not add empty task.");
    }
    var item = { id: nextId++, text: text.trim(), done: false, createdAt: new Date() };
    tasks.push(item);
}
function removeTodo(id) {
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        if (task && task.id === id) {
            tasks.splice(i, 1);
            break;
        }
    }
}
function displayTodos() {
    if (tasks.length === 0)
        return "(no todos)";
    return tasks
        .map(function (t) { return "".concat(t.id, ". [").concat(t.done ? "x" : " ", "] ").concat(t.text, " \u2014 ").concat(t.createdAt.toLocaleString()); })
        .join("\n");
}
;
globalThis.addTodo = addTodo;
;
globalThis.removeTodo = removeTodo;
;
globalThis.displayTodos = displayTodos;
