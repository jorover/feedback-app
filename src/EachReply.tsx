import React from 'react'
import DisplayReply from './DisplayReply'
import ReplyButton from './ReplyButton'
import {replies} from './datalist'
import {datas} from './datalist'

interface allReplies {
  content:string,
  user:any,
  replyingTo:string,
  replies:replies[],
  allItems:datas

}

const EachReply:React.FC<allReplies> = ({content, user, replyingTo, replies, allItems}: allReplies) => {
  return (
    <article className="commentsContent eachReplyContent">
      <article className="commentsDisplay">
                <article className="users innerReply">
                    <article className="usersInfoContent">
                        <article className="userInfo">
                        <figure className={`replyInfoImg ${user.image}`}></figure>
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
                items=""
                textClass="addNewReply"
                allItems={allItems} />
            </div>
        </article>
  )
}

export default EachReply