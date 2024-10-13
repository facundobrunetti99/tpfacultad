import React, { useState } from 'react'
import Button from '../Button/Button'
import Label from '../Label/Label'
import Input from '../Input/Input'
import './ConteinerTask.css'

const ConteinerTask = () => {
  const [task, setTaks] = useState([]);
  const [contentTask, setContentTask] = useState("");

  const addTask = () => {
    setTaks([contentTask, ...task])
  }

  const handleChange = (event) => {
    setContentTask(event.target.value)
  }

  const deleteTask = (index) => {
    const newTasks = [...task]; // Copiamos el array original
    newTasks.splice(index, 1); // Eliminamos la tarea en el índice dado
    setTaks(newTasks); // Actualizamos el estado con la nueva lista
  };
  return (

    <div className='conteinerTasks'>
      <h2>Lista de tareas de Facundo</h2>
      <div className='div-task' >
        <Input
          inputClass={'input_text'}
          inputType={"text"}
          onChange={handleChange}
        ></Input>
        <Button
          buttonClass={'button_task'}
          buttonValue={"Add"}
          onClick={addTask}
        ></Button>
      </div>

      {task.map((content, index) => (
        <div id={index} className="list-task-items">
          <div className="conteiner-task-checkbox">
            <Input
              inputClass={'input-checkbox'}
              inputType={"checkbox"}
            ></Input>
            <Label labelValue={content}>  </Label>
          </div>
          <Button
            buttonClass={'buton_delete'}
            onClick={() => deleteTask(index)}
          ></Button>
        </div>
      ))
      }
    </div>
  )
}

export default ConteinerTask;