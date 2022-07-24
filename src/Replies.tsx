import React from 'react'
import { replies } from './datalist'
import EachReply from './EachReply'
import {datas} from './datalist'

interface allReplies{
    replies:replies[],
    allItems:datas
}

const Replies:React.FC<allReplies> = ({ replies, allItems }:allReplies) => {
  return (
    <section>
        {replies &&
        replies.map((item, index) => {
            const {content, replyingTo, user} = item;
            return(
                <section className="replyUser" key={index}>
                    <EachReply 
                    content={content} 
                    replyingTo={replyingTo} 
                    user={user} 
                    replies={replies}
                    allItems={allItems} />
                </section>
            )
        })
        
    }
    </section>
  )
}

export default Replies