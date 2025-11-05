import React from 'react'
import TodoItem from './TodoItem'
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="mt-6 space-y-3">
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">
          No tasks yet! Add one above 👆
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList
