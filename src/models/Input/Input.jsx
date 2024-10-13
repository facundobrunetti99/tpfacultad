import React from 'react'
import './Input.css'
const Input = ({inputClass, inputType}) => {
 
    
{
  if(inputType==='text'){
    return <input type={inputType} className={inputClass} />

  }else if (inputType==='checkbox'){
    return <input type={inputType} className={inputClass} />
  }
  
}

   
        
 
}

export default Input