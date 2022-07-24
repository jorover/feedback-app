import React from 'react'
import { Link } from 'react-router-dom'
import Comment from '../src/comments.png'
import Arrow from '../src/arrow.png'
import Upvotes from './Upvotes'
import { datas } from './datalist'

interface feedback {
  title:string,
  category:string,
  comments:any,
  description:string,
  upvotes:number,
  upvoted:boolean
  status:string,
  id:number,
  allItems:datas
}

const FeedBack:React.FC <feedback> = ({title, category, comments, description, upvotes, upvoted, status, id, allItems}:feedback ) => {
  


  let upVoteData = {
    upVoteClass: "eachFeedBack upVotes",
    upVoteId: "upvotesBtn",
    img: Arrow,
    upvote: upvotes,
    allItems: allItems
  }


  return (
    <article className="feedBacks">
        <Upvotes upVoteData={upVoteData} />

        <article className="eachFeedBack description">
            <h5> { title } </h5>
            <p> { description } </p>
            <p> { category } </p>
        </article>

        <aside className="eachFeedBack comments">
          <Link to={`/feedback-content/${id}`} className="link comments">
              <img src={Comment} alt="comments-logo" />
              <p> { comments.length } </p>
          </Link>
        </aside>  

        <article className="innerFeedBack">
            <Upvotes upVoteData={upVoteData} />

            <aside className="eachFeedBack comments">
            <Link to={`/feedback-content/${id}`} className="link comments">
              <img src={Comment} alt="comments-logo" />
              <p> { comments.length } </p>
          </Link>
          </aside>  
        </article>
    </article>
  )
}

export default FeedBack