import TodoList from "./components/TodoList";
import './CSS/App.css';

export default function App() {

  return (
    <>
    <div className="App">
      <div className="header">
        <div className="logoside">
          <h1>Tasks</h1>
        </div>
      </div>
      <TodoList /> 
    </div>
    </>
  )
}