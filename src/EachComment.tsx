import React from 'react'
import {replies} from './datalist'
import Replies from './Replies'
import DisplayReply from './DisplayReply'
import ReplyButton from './ReplyButton'
import {datas} from './datalist'


interface commenting {
    content:string,
    user:any,
    replies: replies[],
    replyingTo:string,
    allItems:datas,
    items:any
}

const EachComment:React.FC<commenting> = ({content, user, replyingTo, replies, allItems, items}:commenting ) => {
   

  return (
    <section className="commentsSectionContent">
        <article className="commentsContent">
            <article className="commentsDisplay">
                <article className="users">
                    <article className="usersInfoContent">
                        <article className="userInfo">
                            <figure className={`userInfoImg ${user.image}`}></figure>
                            <article className="userDetails">
                                <h4> {user.name} </h4>
                                <p> @{user.username} </p>
                            </article>
                        </article>
                        <ReplyButton />
                    </article>
                    <p className="replyingTo">{replyingTo && `@${replyingTo}`} <small>{content}</small></p>
                </article>
            </article>
            <div className="replyForm">
                <DisplayReply 
                replies={replies} 
                users={user} 
                textClass="addNewReply" 
                allItems={allItems}
                items={items} />
            </div>
        </article>
        <Replies replies={replies} allItems={allItems}  />
    </section>
  )

  
}

export default EachComment