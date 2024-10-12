import Button from '../Button/Button'
/* import Label from '../Label/Label' */
import Input from '../Input/Input'
import './ConteinerTask.css'

const ConteinerTask = () => {

  return (

    <div className='conteinerTasks'>
      <h2>Lista de tareas de Facundo</h2>
      <div className='div-task' >
        <Input
          inputClass={'input_text'}
    
          inputType={"text"}

        ></Input>
        <Button
          buttonClass={'button_task'}
          buttonValue={"Add"}
          ></Button>
      </div>
      

    </div>

  )
}

export default ConteinerTask;