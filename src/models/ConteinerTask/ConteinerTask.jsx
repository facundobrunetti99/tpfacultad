import React, { useState } from 'react';
import Button from '../Button/Button';
import Label from '../Label/Label';
import Input from '../Input/Input';
import './ConteinerTask.css';

const ConteinerTask = () => {
  const [tasks, setTasks] = useState([]);
  const [contentTask, setContentTask] = useState("");

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      content: contentTask,
      complete: false
    };
    setTasks([newTask, ...tasks]);
    
  };

  const handleChange = (event) => {
    setContentTask(event.target.value);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='conteinerTasks'>
      <h2>Lista de tareas de Facundo</h2>
      <div className='div-task'>
        <Input
          inputClass={'input_text'}
          inputType={"text"}
          value={contentTask}
          onChange={handleChange}
        />
        <Button
          buttonClass={'button_task'}
          buttonValue={"Add"}
          onClick={addTask}
        />
      </div>

      {tasks.length === 0 ? (
        <p className='div-not-task'>No hay tareas para mostrar.</p>
      ) : (
        tasks.map((t) => (
          <div key={t.id} className="list-task-items">
            <div className="conteiner-task-checkbox">
              <Input
                inputClass={'input-checkbox'}
                inputType={"checkbox"}
                checked={t.complete}
                onChange={() => toggleTaskCompletion(t.id)} 
              />
              <Label 
                labelValue={t.content} 
                style={{ textDecoration: t.complete ? 'line-through' : 'none' }} 
              />
            </div>
            <Button
              buttonClass={'buton_delete'}
              onClick={() => deleteTask(t.id)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ConteinerTask;