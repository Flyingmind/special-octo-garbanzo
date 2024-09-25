import React from 'react';


const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className="task-grid">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task)}
            />
            <span style={task.completed ? { textDecoration: "line-through" } : {}}>{task.title}</span>
            {/* <span>{task.completed ? 'Completed' : 'Pending'}</span> */}
            <button onClick={() => onDelete(task)}>Delete</button>
        </div>
    );
};

export default Task;