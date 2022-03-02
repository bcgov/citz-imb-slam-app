import React from 'react'

export const TextInput = ({label, value, handleInputChange}) => {
  return (
    <div className="flex-large">
        <label>{label}</label> 
        <input type="text" name="name" value={value} onChange={handleInputChange} />
    </div>
  )
}
