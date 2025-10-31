interface Task {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
}

const tasks: Task[] = [];
let nextId = 1;

function addTodo(text: string): void {
  if(!text.trim()){
    throw new Error("Can not add empty task.")
  }
  const item: Task = { id: nextId++, text: text.trim(), done: false, createdAt: new Date() };
  tasks.push(item);
}

function removeTodo(id: number): void {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task && task.id === id) {
      tasks.splice(i, 1);
      break;
    }
  }
}

function displayTodos(): string {
  if (tasks.length === 0) return "(no todos)";
  return tasks
    .map(t => `${t.id}. [${t.done ? "x" : " "}] ${t.text} — ${t.createdAt.toLocaleString()}`)
    .join("\n");
}

;(globalThis as any).addTodo = addTodo;
;(globalThis as any).removeTodo = removeTodo;
;(globalThis as any).displayTodos = displayTodos;