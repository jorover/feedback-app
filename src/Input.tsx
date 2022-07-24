import React from 'react'

interface input{
  inputLabel:string,
  inputSmall:string,
  inputVal:string,
  formChange:any,
  inputClass:string
}

const Input:React.FC <input> = ( {inputLabel, inputSmall, inputClass, inputVal, formChange }:input ) => {
  return (
    <div className="formControl">
       <label> {inputLabel} </label>
       <small> {inputSmall} </small>
       <input type="text" name={inputVal} onChange={formChange} className={inputClass} />
       <small className="error"> Can't be empty </small>
    </div>
  )
}

export default Input



