import React, { useState } from 'react';

function Todolist() {
  const [task, setTask] = useState(['fnasns', 'njasnvk', 'ngzdkvdv']);
  const [newtask, setNewtask] = useState('');

  const handleInputChange = (event) => {
    setNewtask(event.target.value); 
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newtask.trim() === '') return; 
    setTask((prevTasks) => [...prevTasks, newtask]);
    setNewtask(''); 
  };

  const deleteTask = (i) => {
    const newTasks = task.filter((_, index) => index !== i);
    setTask(newTasks);
  };

  const TaskUp = (i) => {
    if (i <= 0) return; 
    const newTasks = [...task];
    [newTasks[i], newTasks[i - 1]] = [newTasks[i - 1], newTasks[i]]; 
    setTask(newTasks);
  };

  const TaskDown = (i) => {
    if (i >= task.length - 1) return; 
    const newTasks = [...task];
    [newTasks[i], newTasks[i + 1]] = [newTasks[i + 1], newTasks[i]];
    setTask(newTasks);
  };

  return (
    <div>
        <h1>Todo List</h1>
      <input 
        type="text"
        placeholder='Add task'
        value={newtask}
        onChange={handleInputChange}
      />

      <button onClick={addTask}>ADD</button>

      <ol>
        {
          task.map((x, i) => (
            <li key={i}>
              <span className='task-list'>{x}</span>
              <button className='delete-buttons' onClick={() => deleteTask(i)}>DELETE</button>
                <br/>
              <button className='move-task' onClick={() => TaskUp(i)}>UP</button>
                <br/>
              <button className='move-task' onClick={() => TaskDown(i)}>DOWN</button>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

export default Todolist;
