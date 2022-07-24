import React from 'react'
import { Link} from 'react-router-dom'
import Arrow from './arrow.png'
import Upvotes from './Upvotes'
import comment from './comments.png'
import ChangeRoute from './ChangeRoute'

interface eachRoadMap {
    eachClass:string,
    status:string,
    title:string,
    description:string
    upvotes:number,
    comments:any,
    circle:string,
    circleTitle:string,
    category:string,
    id:number,
    allItems:any
}

const EachRoadMap:React.FC <eachRoadMap> = ({ eachClass, id, status, allItems, category, title, description, upvotes, comments, circle, circleTitle }:eachRoadMap ) => {


    let upVoteData = {
        upVoteClass: "roadMapupVotes",
        upVoteId: "upvotesBtn",
        img: Arrow,
        upvote: upvotes,
        allItems: allItems
      }
    

  return (
            <article className="eachRoadMap">
                <header className={eachClass}> </header>

                <article className="eachRoadMapCircle">
                    <div className={`circle ${circle}`}></div>
                    <p> {circleTitle} </p>
                </article>

                <article className="eachRoadMapTitle">
                    <h6> {title} </h6>
                    <p> {description} </p>
                </article>
                
                <p className="category"> {category} </p>

                <article className="innerRoadMap">
                    {/*<button className="roadMapupVotes">
                        <img src={Arrow} alt="arrow-up-logo" />
                        <p> {upvotes} </p>
                    </button>*/}

                    <Upvotes upVoteData={upVoteData} />

                    <article className="roadMapupComments">
                    <Link to="" className="roadMapupComments" onClick={()=> ChangeRoute(`feedback-content/${id}`)}>
                        <img src={comment} alt="arrow-up-logo" />
                        <p> {comments.length} </p>
                    </Link>
                    </article>
                </article>
            </article>
  )
}

export default EachRoadMap