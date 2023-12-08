// TodoList.js
import React from 'react';
import './App.css'; 


const TodoList = ({ todos, dispatch, setEditTodoText, showCompleted }) => {
    return (
        <ul>
        {todos.map((todo) => (
            // Display all tasks or only completed tasks based on showCompleted
            (!showCompleted || todo.completed) && (
            <li
                key={todo.id}
                style={{
                border: todo.completed ? '2px solid red' : '2px solid #ccc',
                backgroundColor: todo.completed ? 'lightcoral' : 'white',
                }}
            >
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                style={{ marginRight: '10px' }}
                />
                <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'red' : 'black',
                    cursor: 'pointer',
                    textAlign: 'left',
                }}
                >
                {todo.title}
                </span>
                <button onClick={() => setEditTodoText(todo.id)} style={{ width: '90px', marginLeft: '10px' }}>
                Edit
                </button>
                <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })} style={{ width: '90px', marginLeft: '10px' }}>
                Delete
                </button>
            </li>
            )
        ))}
        </ul>
    );
};

export default TodoList;





