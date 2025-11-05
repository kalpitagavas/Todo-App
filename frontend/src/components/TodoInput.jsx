import React from 'react'

const TodoInput = ({task,setTask,addTodo}) => {
  return (
    <div>
       <div className='flex  flex-col sm:flex-row items-center justify-center gap-3'>
            <input type="text" placeholder="Add a new Task..."  value={task}   onChange={(e) => setTask(e.target.value)} className='w-full sm:w-auto rounded-lg px-2 py-4 border  border-gray-600 bg-gray-700 placeholder-gray-400 text-white '/>
            <button className='w-full sm:w-auto text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 ml-2 rounded-lg shadow-lg transition' onClick={addTodo}>Add</button>
          </div>
    </div>
  )
}

export default TodoInput

