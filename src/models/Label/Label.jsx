import React from 'react'
import './Label.css'
const Label = ({labelValue}) => {
  return (
    <label className='input-label'>{labelValue}</label>
  )
}

export default Label