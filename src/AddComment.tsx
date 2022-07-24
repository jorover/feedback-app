import React from 'react'
import TextArea from './TextArea'
import {activateBtn} from './ActivateBtn'

interface items {
  allItems:Object
}

const AddComments:React.FC<items> = ({ allItems }:items ) => {

  return (
    <section className="commentsContainer addComment">
      <TextArea 
      textAreaLabel="Add Comment" 
      textAreaSmall="" 
      placeholder="Type your comment here" 
      textAreaPost={true}
      textAreaClass="addNewComment"
      textAreaVal=""
      allItems= {allItems}
      formChange={()=> activateBtn("Post Comment", ".addNewComment")} />
    </section>
  )
}

export default AddComments