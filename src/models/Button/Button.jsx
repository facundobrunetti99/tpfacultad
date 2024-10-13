import React from 'react'
import './Button.css'

const Button = ({ buttonClass, buttonValue , onClick}) => {


  {
    if (buttonClass === "button_task") {
      return <button className={buttonClass} onClick={onClick} >{buttonValue}</button>
    } else
      if (buttonClass === 'buton_delete') {

        return  <button className='button-delete' onClick={onClick}>    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        style={{ fill: "rgba(226, 12, 12, 1)" }}  // El estilo debe estar en formato de objeto en JSX
      >
        <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
        <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
      </svg>
      </button>
      }
  }


}

export default Button