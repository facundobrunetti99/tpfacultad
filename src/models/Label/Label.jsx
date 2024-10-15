import React from 'react'
import './Label.css'
const Label = ({labelValue, style}) => {
  return (
    <label className='input-label' style={style}>{labelValue}</label>
  )
}

export default Label