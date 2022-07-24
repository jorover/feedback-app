import React from 'react'
import Form from './Form'
import { addForm } from './formDetails'
import { SubmitForm } from './SubmitForm'
import {selectDataOptionList} from './selectOptionDatalist'
import { addImg } from './addImgToOptions'
import Pup from '../src/p-up.png'

interface formValues {
  input:string,
  select:string,
  textArea:string
}


const inputsVal:formValues = {
  input: 'title',
  select: 'category',
  textArea: 'description'
}


const AddFeedback:React.FC = () => {
  const [inputVal, setInputVal] = React.useState({})
  const handleChange = (event:React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const name = target.name
    setInputVal((val) => {
      return ({...val, [name]:value})
    })
    target.parentElement?.classList.remove('showError')
  }


  let customData = {
    customContainer: 'innerSelectDropdownContainer',
    customTopText: 'innerSelectTopText',
    customContent: 'innerSelectDropdownContent',
    customDropDown: 'innerSelectDropdown',
    customOption: 'feature',
    customHeader: '',
    option:'innerEachOption',
    img:Pup
}

React.useEffect(() => {
    addImg('Feature');
}, [])

  return (
      <>
        <Form 
        formDetails={addForm} 
        formInput={inputsVal} 
        formChange={handleChange}
        formSubmit={SubmitForm}
        inputVal={inputVal}
        customData = {customData}
        selectData={selectDataOptionList} />
      </>
  )
}

export default AddFeedback