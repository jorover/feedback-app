import React from 'react'
import CustomSelect from './CustomSelect'
import {updateSelectData} from './selectData'
import Pup from '../src/p-up.png'

interface select{
    updateLabel:string,
    updateSmall:string
  }

const UpdateSelect:React.FC<select> = ({updateLabel, updateSmall }:select ) => {
  let customData = {
    customContainer: 'innerSelectDropdownContainer',
    customTopText: 'innerSelectTopText',
    customContent: 'innerSelectDropdownContent',
    customDropDown: 'innerSelectDropdown',
    customOption: '',
    customHeader: '',
    option:'innerEachOption',
    img:Pup
}

  return (
    <>
    <article className="selectformControl">
      <label> {updateLabel} </label>
      <small> {updateSmall} </small>
    </article>
    <CustomSelect upDateData={()=> console.log('red')} selectData={updateSelectData} customData={customData} />
   </>
  )
}

export default UpdateSelect