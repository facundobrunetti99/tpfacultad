import React from 'react'
import './Input.css'
const Input = ({inputClass,onChange, inputType}) => {
  return (
    <>
    <input type={inputType} className={inputClass} onChange={onChange}/>
        
    </>
  )
}

export default Input