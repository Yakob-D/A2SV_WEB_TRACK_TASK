import { useState } from 'react';
import Tasks from '../todo';
import operations from '../operations';
import { FaCheck, FaEdit } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import TodoForm from './TodoForm';
import '../CSS/TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState<Tasks[]>(operations.getTasks());
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [newTaskText, setNewTaskText] = useState<string>('');

    const handleEdit = (id: number, task: string): void => {
        setEditingTaskId(id);
        setNewTaskText(task);
    }

    const handleEditCancel = (): void => {
        setEditingTaskId(null);
        setNewTaskText('');
    }

    const handleEditSave = (id: number): void => {
        if (newTaskText.trim() !== ''){
            const updatedTask = operations.updateTask({
                id,
                task: newTaskText,
                done: false
            });
            setTasks((prevTasks) => prevTasks.map(task => task.id === id ? updatedTask : task));
            setEditingTaskId(null);
            setNewTaskText('');
        }
    }

    const deleteTask = (id: number): void => {
        operations.deleteTask(id);
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id)); 
    }

    return (
        <div className="todoContainer">
            <div>
                <TodoForm setTasks={setTasks} />
            </div>
            <div className="todos">
            {tasks.map((task) => (
                <div className="items" key={task.id}>
                    {editingTaskId === task.id ? (
                        <div className="editText">
                            <input type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} autoFocus={true}/>
                            <button onClick={() => handleEditSave(task.id)}>
                                <FaCheck />
                            </button>
                            <button className='cancelBtn' onClick={() => handleEditCancel()}>
                                 <GiCancel />
                            </button>
                        </div>
                    ) : (
                        <div className="editBtn">
                            <span>{task.task}</span>
                            <button onClick={() => handleEdit(task.id, task.task)}> 
                                <FaEdit />
                            </button>
                        </div>
                    )}

                    <button onClick={() => deleteTask(task.id)}>
                        <RiDeleteBin5Fill />
                    </button>
                </div>
            ))}
            </div>
        </div>
  )
}

export default TodoList