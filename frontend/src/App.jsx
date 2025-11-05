import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
const[task,setTask]=useState("");
const [todos,setTodos]=useState([]);



  // Step 2: Add Todo
const addTodo=()=>{
  if(task.trim()==="") return;
  const newTodo={
    id:Date.now(),
    text:task,
    complete:false,
  };
  setTodos([...todos,newTodo]),
  setTask("")

}  

 // ❌ Step 3: Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <>
       <div className='min-h-screen bg-gray-900 flex items-center justify-center p-4'>
        <div className='bg-gray-800 text-white w-full max-w-2xl rounded-2xl shadow-lg p-6' >
          {/* Title */}
          <h1 className='font-semibold text-center text-2xl mb-4 mt-4'>📝 My Todo App</h1>

         <TodoInput task={task} setTask={setTask} addTodo={addTodo} />
         <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          </div>
       </div>
    </>
  )
}
export default App
