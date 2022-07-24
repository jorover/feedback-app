import React from 'react'
import TextArea from './TextArea'
import Button from './Button'
import {eachReplyBtn} from './ActivateBtn'
import {replies} from './datalist'
import { user } from './User'
import {datas} from './datalist'
import { addCommentReply } from './AddCommentReply'

interface displayReply{
  replies:replies[],
  users:any,
  textClass:string,
  allItems:datas,
  items:any
}

const DisplayReply:React.FC<displayReply> = ({replies, users, allItems, items, textClass}:displayReply) => {

  const replyComments = (event:React.FormEvent<EventTarget>) => {
    const target = event.currentTarget as HTMLFormElement;
    const element = target.parentElement?.parentElement?.parentElement?.parentElement;
    let textVal = target.parentElement?.parentElement?.querySelector('.addNewReply') as HTMLTextAreaElement;
    const reply = {
      content: textVal?.value,
      replyingTo: users.username,
      user: user
    }

    if(textVal.value === ''){
      return;
    } else {
      replies.push(reply)
      addCommentReply(allItems)
      element?.classList.remove('showReplyForm')
      textVal.value = ''
      target.parentElement?.classList.remove('displayBtn')
    }

  }
 
  return (
    <form className="displayReplyContent">
        <article className="div"></article>
        <TextArea 
        textAreaLabel="" 
        textAreaSmall="" 
        placeholder="" 
        textAreaPost={false}
        textAreaVal={``}
        allItems=""
        textAreaClass={textClass}
        formChange={()=> eachReplyBtn()} />
        <Button 
        mainBtn="btn reply-btn" 
        btnPrimary="btn-primary" 
        content="Post Reply" 
        link="" 
        click={(e:any) => replyComments(e)}
        type="button"
        inputVal="" />
    </form>
  )
}

export default DisplayReply