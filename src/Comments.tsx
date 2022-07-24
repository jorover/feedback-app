import React from 'react'
import { comment } from "./datalist"
import EachComment from './EachComment'
import {datas} from './datalist'


interface newComments {
    allItems:datas
}


const Comments:React.FC<newComments> = ( { allItems }:newComments ) => {

  const {comments} = allItems;

  return (
    <section className="commentsContainer">
        <h1> {comments.length} { comments.length <=1 ? 'Comment' : 'Comments'} </h1>
        {comments &&
        comments.map((item:comment) => { 
            const {id, content, user, replies} = item;
            return(
              <article key={id}>
                <EachComment 
                replyingTo="" 
                content={content} 
                user={user} 
                replies={replies}
                allItems={allItems}
                items={item}  />
               </article>
            )
        })           
    }
    </section>
  )
}

export default Comments