import React, { useState } from 'react'

const ToDoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    editTodo(todo.id, editText)
    setIsEditing(false)
  }

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => toggleComplete(todo.id)}>✔</button>
          <button onClick={() => deleteTodo(todo.id)}>🗑</button>
          <button onClick={() => setIsEditing(true)}>✏</button>
        </>
      )}
</li>
  )
}

export default ToDoItem