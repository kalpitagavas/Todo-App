import React from 'react'

const TodoItem = ({todo, toggleTodo, deleteTodo}) => {
  return (
  
      <li
                  key={todo.id}
                  className="flex justify-between items-center bg-gray-700 p-3 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span
                      className={`${
                        todo.completed
                          ? "line-through text-gray-400"
                          : "text-white"
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-400 hover:text-red-600 text-sm font-semibold"
                  >
                    ✖
                  </button>
                </li>
    
  )
}

export default TodoItem
