import React, { useState, useEffect } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './services/taskService';
import './App.css';
import Task from './components/Task'



function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  useEffect(() => {
    // Llamamos a getTasks para obtener la lista de tareas
    getTasks()
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleAddTask = () => {
    // Llamamos a addTask para agregar una nueva tarea
    addTask(newTask)
      .then(task => setTasks([...tasks, task]))
      .catch(error => console.error('Error adding task:', error));
    setNewTask('');
  };

  const handleToggleTask = (task) => {
    // Llamamos a updateTask para cambiar el estado de la tarea
    updateTask({ ...task, completed: !task.completed })
      .then(updatedTask => {
        setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
      })
      .catch(error => console.error('Error updating task:', error));
  };

  const handleDeleteTask = (task) => {
    // Llamamos a deleteTask para eliminar la tarea
    deleteTask(task.id)
      .then(() => {
        setTasks(tasks.filter(t => t.id !== task.id));
      })
      .catch(error => console.error('Error deleting task:', error));
  };



  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
  });



  return (
    <div className="app-container">
      <h1>To-Do List</h1>

      {/* Filtro de tareas */}
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask} disabled={!newTask} >Add Task</button>

      <div className="tasks-container">
        {filteredTasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

