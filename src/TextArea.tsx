import React from 'react'
import Button from './Button'
import { generateId } from './GenerateID'
import { user } from './User'
import { addCommentReply } from './AddCommentReply'

interface textArea{
    textAreaLabel:string,
    textAreaSmall:string,
    placeholder:string,
    textAreaPost:boolean,
    textAreaVal:string,
    formChange:any,
    textAreaClass:string,
    allItems:any
  }

const TextArea:React.FC <textArea> = ({textAreaLabel, allItems, textAreaClass, textAreaSmall, placeholder, textAreaPost, textAreaVal, formChange}:textArea ) => {

  const addComments = () => {
      const itemContent = document.querySelector('.addNewComment') as HTMLTextAreaElement
      const newComment = {
        id: generateId(),
          content: itemContent?.value,
          user: user,
          replies: []
        }

      if(itemContent.value === ""){
        return;
      } else {
        allItems.comments.push(newComment) 
        addCommentReply(allItems)
        itemContent.value = ""
      }
}



  return (
    <article className="formControl">
        <label> {textAreaLabel} </label>
        <small> {textAreaSmall} </small>
        <textarea 
        placeholder={placeholder} 
        maxLength={250}
        className={textAreaClass} 
        name={textAreaVal} 
        onKeyUp={formChange}></textarea>
        <small className="error"> Can't be empty </small>
        {textAreaPost &&
          <article className="textAreaPost">
            <p className="characters"> 250 characters left </p>
            <Button 
            content="Post Comment" 
            click={()=> addComments()}
            mainBtn="btn" 
            btnPrimary="btn-primary" 
            link=""
            type="button"
            inputVal="" />
          </article>
        }



    </article>
  )
}

export default TextArea