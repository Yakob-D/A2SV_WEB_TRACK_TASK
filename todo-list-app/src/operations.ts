import Tasks from './todo';

const LOCAL_STORAGE_KEY = 'tasks';

const operations = {
    getTasks: (): Tasks[] => {
        const tasksStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return tasksStr ? JSON.parse(tasksStr) : [];
    },
    
    addTasks: (task: string): Tasks => {
        const currentTasks = operations.getTasks();
        const newTask: Tasks = {
            id: Date.now(),
            task: task,
            done: false
        }

        currentTasks.push(newTask);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentTasks));
        return newTask;
    },

    updateTask: (newTask: Tasks): Tasks => {
        const currentTasks = operations.getTasks();
        const updatedTasks = currentTasks.map(task => task.id === newTask.id ? newTask : task);

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
        return newTask;
    },

    deleteTask: (id: number): void => {
        const currentTasks = operations.getTasks();
        const updatedTasks = currentTasks.filter(task => task.id !== id);

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
    }
}

export default operations;