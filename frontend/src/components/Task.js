import React from 'react';


const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className="task-grid">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task)}
            />
            <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                {task.title}
            </span>
            <button onClick={() => onDelete(task)}>Delete</button>
        </div>
    );
};

export default Task;