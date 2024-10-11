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

  return (

    <div className='conteinerTasks'>
      <h2>Lista de tareas de Facundo</h2>
      <div className='div-task' >
        <Input
          inputClass={'input_text'}
          onChange={handleChange}
          inputType={"text"}

        ></Input>
        <Button
          buttonClass={'button_task'}
          buttonValue={"Add"}
          onClick={addTask}></Button>
      </div>
      <ul className="div-tasks">


        {task.map((t, index) => (
          <li key={index} className="li_element_task">
            <div className='div-li-checkbox'>
              <input className="input-checkbox" type="checkbox" name="" id="" />
              <Label labelValue={t}></Label>
            </div>

            <button className='button-delete' type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(226, 12, 12, 1)" }}  // El estilo debe estar en formato de objeto en JSX
              >
                <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
              </svg>

            </button>
          </li>
        ))}





      </ul>

    </div>

  )
}

export default ConteinerTask;