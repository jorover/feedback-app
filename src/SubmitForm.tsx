import { datas } from "./datalist"
import ChangeRoute from './ChangeRoute'

let allData = localStorage.getItem('All Data') ? JSON.parse(localStorage.getItem('All Data') || "") : []
  
export const SubmitForm = (event:React.FormEvent<EventTarget>, inputVal:{}) => {
    const formInputVal = document.querySelectorAll<HTMLInputElement>('.addFormClass')
    const allEditValues = document.querySelectorAll<HTMLInputElement>('.editFormClass')
    const target = event.target as HTMLButtonElement
    const innerText = target.innerText; 
    const checkInput = innerText === 'Add Feedback' ? formInputVal : allEditValues
     testValuesOfForm(innerText, inputVal, checkInput);
}


  const testValuesOfForm = (text:string, inputVal:{}, formInputVal:any) => {
    const testArray:boolean[] = []
    Array.from(formInputVal, (item:any) => {
      if(item.value === '' || item.value.length < 1){
          return item.parentElement?.classList.add('showError');
      } else {
         return testArray.push(true)
      }
    })


    updateForm(testArray, text, inputVal)

  }

  const updateForm = (testArray:boolean[], text:string, inputVal:{}) => {
    if(testArray.length === 2 && text === 'Add Feedback'){
      addItems(inputVal)
    }

    if(testArray.length === 2 && text === 'Save Changes'){
      editForms(inputVal)
    }

    console.log(text)
  }

  const addItems = (inputVal:{}) => {
    const itemVal = document.querySelectorAll<HTMLElement>('#customOption')
    const newVals = {
      id: allData.length + 1,
       ...inputVal, 
       comments: [],
       category: itemVal[0].innerText,
       upvotes: 0,
       upVoted:false,
       status:'suggestion'
     }
  
     allData.push(newVals)
     ChangeRoute('/')
     return localStorage.setItem('All Data', JSON.stringify(allData))
  }

  const editForms = (input:any) => {
      const itemVal = document.querySelectorAll<HTMLElement>('#customOption')
      let {id, upvotes, upVoted, comments } = input
      const allEditValues = document.querySelectorAll<HTMLInputElement>('.editFormClass');
      const newValues = {
          id: id,
          title: allEditValues[0].value,
          description: allEditValues[1].value,
          category: itemVal[0].innerText,
          status: itemVal[1].innerText,
          upvotes: upvotes,
          upVoted: upVoted,
          comments: comments
      }

      replaceItem(newValues)
      ChangeRoute('/')

  }

export const replaceItem = (newValues:datas) => {
    const exchangeItem = allData.map((item:datas) => {
      return item.id === newValues.id ? newValues : item
    })
    return localStorage.setItem('All Data', JSON.stringify(exchangeItem))
  }


  export const delItems = (id:string | undefined) => {
   allData = allData.filter((item:datas) => {
          return item.id !== Number(id)
      })
    return localStorage.setItem('All Data', JSON.stringify(allData))

  }

  