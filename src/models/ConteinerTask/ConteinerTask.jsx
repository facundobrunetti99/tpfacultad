import Button from '../Button/Button'
import Label from '../Label/Label'
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
      <div className="list-task-items">

        <div className="conteiner-task-checkbox">
          <Input
            inputClass={'input-checkbox'}
            inputType={"checkbox"}
          ></Input>
          <Label labelValue={"Task N"}>  </Label>
        </div>
        <Button
          buttonClass={'buton_delete'}
        ></Button>


      </div>
      <div className="list-task-items">

        <div className="conteiner-task-checkbox">
          <Input
            inputClass={'input-checkbox'}
            inputType={"checkbox"}
          ></Input>
          <Label labelValue={"Task N-1"}>  </Label>
        </div>
        <Button
          buttonClass={'buton_delete'}
        ></Button>


      </div>
      <div className="list-task-items">

        <div className="conteiner-task-checkbox">
          <Input
            inputClass={'input-checkbox'}
            inputType={"checkbox"}
          ></Input>
          <Label labelValue={"Task N-2"}>  </Label>
        </div>
        <Button
          buttonClass={'buton_delete'}
        ></Button>


      </div>
      <div className="list-task-items">

        <div className="conteiner-task-checkbox">
          <Input
            inputClass={'input-checkbox'}
            inputType={"checkbox"}
          ></Input>
          <Label labelValue={"Task K"}>  </Label>
        </div>
        <Button
          buttonClass={'buton_delete'}
        ></Button>


      </div>
      <div className="list-task-items">

        <div className="conteiner-task-checkbox">
          <Input
            inputClass={'input-checkbox'}
            inputType={"checkbox"}
          ></Input>
          <Label labelValue={"Task 2"}>  </Label>
        </div>
        <Button
          buttonClass={'buton_delete'}
        ></Button>


      </div>
      <div className="list-task-items">

        <div className="conteiner-task-checkbox">
          <Input
            inputClass={'input-checkbox'}
            inputType={"checkbox"}
          ></Input>
          <Label labelValue={"Task 1"}>  </Label>
        </div>
        <Button
          buttonClass={'buton_delete'}
        ></Button>


      </div>



    </div>




  )
}

export default ConteinerTask;