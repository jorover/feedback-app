import React from 'react'
import { customList } from './customDataList'
import CustomSelect from './CustomSelect'
import { select } from './selectData'

interface selects{
    selectLabel:string,
    selectSmall:string,
    selectVal: string,
    formChange:any,
    selectData:select[],
    customData:customList
  }

const Select:React.FC <selects> = ( {selectLabel, selectSmall, selectVal, customData, selectData, formChange}:selects ) => {
  
  return (
    <>
      <article className="selectformControl">
        <label> {selectLabel} </label>
        <small> {selectSmall} </small>
      </article>
      <CustomSelect upDateData={()=> console.log('red')} selectData={selectData} customData={customData} />
     </>
  )
}

export default Select