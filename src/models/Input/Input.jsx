import React from 'react'
import './Input.css'
const Input = ({inputClass, inputType,onChange}) => {
 
    
{
  if(inputType==='text'){
    return <input type={inputType} className={inputClass} onChange={onChange}/>

  }else if (inputType==='checkbox'){
    return <input type={inputType} className={inputClass} onChange={onChange} />
  }
  
}

   
        
 
}

export default Input