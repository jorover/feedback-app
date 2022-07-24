import React from 'react'


const ReplyButton:React.FC = () => {

  const showForm = (event:React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLButtonElement;
    const element = target.parentElement?.parentElement?.parentElement?.parentElement;
    if(element?.classList.contains('showReplyForm')){
       element.classList.remove("showReplyForm")
    } else {
      element?.classList.add("showReplyForm")
    }

  }
  return (
    <button onClick={(e)=> showForm(e)}> Reply </button>
  )
}

export default ReplyButton