import React from 'react'
import Form from './Form'
import { useParams } from 'react-router'
import { editForm } from './formDetails'
import ShareData from './ShareData'
import {SubmitForm} from './SubmitForm'
import { datas } from './datalist'
import { selectDataOptionList } from './selectOptionDatalist'
import { addImg } from './addImgToOptions'
import Pup from '../src/p-up.png'

const EditFeedback = () => {

  let {id} = useParams()
  
  const [mainData] = ShareData(id)
  const [newData] = mainData;


  React.useEffect(() => {
    const getItemStored = () => {
      const stored = localStorage.getItem('All Data') ? JSON.parse(localStorage.getItem('All Data') || "") : [];
      const newData = stored.filter((item:datas) => {
        return item.id === Number(id)
      })
      const [data] = newData;
      const items = [data.title, data.category, data.status, data.description]
      const formInputVal = document.querySelectorAll<HTMLInputElement>('.editFormClass')
      const allIdInput = document.querySelectorAll<HTMLElement>('#customOption')
      formInputVal[0].value = items[0]
      allIdInput[0].innerText = items[1]
      allIdInput[1].innerText = items[2]
      formInputVal[1].value = items[3]
      addImg(allIdInput[0].innerText)
      addImg(allIdInput[1].innerText)
  
    }
    getItemStored();
  }, [id])

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
      <Form 
      formDetails={editForm} 
      formInput= ""
      formChange={()=> console.log('red')} 
      formSubmit={SubmitForm}
      inputVal={newData}
      customData={customData}
      selectData={selectDataOptionList} />
    </>
  )
}

export default EditFeedback