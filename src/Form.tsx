import React from 'react'
import GoBack from './GoBack'
import Input from './Input'
import Select from './Select'
import UpdateSelect from './UpdateSelect'
import TextArea from './TextArea'
import Button from './Button'
import { delItems } from './SubmitForm'
import { useParams } from 'react-router-dom'
import { customList } from './customDataList'
import { select } from './selectData'
import { goBack } from './back'

interface form{
    formDetails:Object | any,
    formInput:Object | any,
    formChange:Function,
    formSubmit:Function | any,
    inputVal:Object,
    customData:customList,
    selectData:select[]

}


type param = {
  id:string | undefined 
}


const Form:React.FC<form> = ( { formDetails, inputVal, formInput, customData, selectData, formChange, formSubmit }:form ) => {

  let {id} = useParams<param>();
  
  return (
    <section className="feedBackFormContainer">
    <GoBack />
    <section className="feedBackFormContent">
      <svg width={formDetails.width} height={formDetails.height} xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stopColor="#E84D70" offset="0%"></stop><stop stopColor="#A337F6" offset="53.089%"></stop><stop stopColor="#28A7ED" offset="100%"></stop></radialGradient></defs><g fill="none" fillRule="evenodd"><circle fill="url(#a)" cx={formDetails.cx} cy={formDetails.cy} r={formDetails.r}></circle><path fill="#FFF" fillRule="nonzero" d={formDetails.d}></path></g></svg>
      <form className="feedBackForm">
        <h3> {formDetails.headerText} </h3>
        <Input 
        inputLabel={formDetails.inputLabel} 
        inputSmall={formDetails.inputSmall} 
        inputClass={formDetails.inputClass}
        inputVal={formInput.input}
        formChange={formChange}  />
        <Select 
        selectLabel={formDetails.selectLabel} 
        selectSmall={formDetails.selectSmall}
        selectVal={formInput.select}
        formChange={formChange}
        selectData={selectData}
        customData={customData} />
        {
            formDetails.update && 
            <UpdateSelect 
            updateLabel={formDetails.updateLabel} 
            updateSmall={formDetails.updateSmall} />
        }
        <TextArea 
        textAreaPost= {false} 
        placeholder="" 
        textAreaLabel={formDetails.textAreaLabel} 
        textAreaSmall={formDetails.textAreaSmall}
        textAreaVal={formInput.textArea}
        textAreaClass={formDetails.textAreaClass}
        formChange={formChange}
        allItems=""/>
        <footer className="formBtnGroup">
            {formDetails.deleteBtn.delBtn && 
                <article className="delBtn">
                <Button 
                link="/" 
                mainBtn="btn" 
                btnPrimary="" 
                content="Delete"
                inputVal=""
                click={()=> delItems(id)}
                type="button"/>
                </article>
            }

            <aside className="sideBtn">
                <Button 
                link="" 
                mainBtn="btn" 
                btnPrimary="btn-primary" 
                content={formDetails.addContent} 
                click={formSubmit}
                type="button"
                inputVal={inputVal}  />
                <Button 
                link="" 
                mainBtn="btn" 
                btnPrimary="" 
                content="Cancel" 
                click={()=> goBack()}
                type="button"
                inputVal=""  />
            </aside>
        </footer>
      </form>
    </section>
  </section>
  )
}

export default Form