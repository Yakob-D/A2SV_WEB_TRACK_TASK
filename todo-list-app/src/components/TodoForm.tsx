import { Dispatch, SetStateAction, useState } from 'react';
import Tasks from '../todo';
import operations from '../operations';
import '../CSS/TodoForm.css';

interface SetTaskProp{
    setTasks: Dispatch<SetStateAction<Tasks[]>>;
}

const TodoForm:React.FC<SetTaskProp> = ({ setTasks }) => {
    const [newTaskText, setNewTaskText] = useState<string>('');

    const handleAddTask = (): void => {
        if(newTaskText.trim() !== ''){
            const newTask = operations.addTasks(newTaskText);
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTaskText('');
        }
    }

    return(
        <div className='inputForm'>
            <input type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} autoFocus={true} placeholder='Enter your task... ' />
            <button onClick={() => handleAddTask()}>Add</button>
        </div>
    )
}

export default TodoForm;