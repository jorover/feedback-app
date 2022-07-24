import React from 'react'
import { upvoteInfo } from './upvotesInfo'
import { replaceItem } from './SubmitForm'

interface upvoteInfos {
    upVoteData:upvoteInfo
}

const Upvotes:React.FC<upvoteInfos> = ({ upVoteData }:upvoteInfos ) => {

    const [updateUpVote, setUpdateUpVote] = React.useState(upVoteData.upvote);

    let {allItems} = upVoteData;

    const getUpvotes = () => {
        if(allItems.upVoted === false){
          let newUpvotes = allItems.upvotes + 1
          allItems.upvotes = newUpvotes
          allItems.upVoted = true;
          replaceItem(allItems)
          setUpdateUpVote(newUpvotes)
        } else {
          let newUpvotes = allItems.upvotes - 1;
          allItems.upvotes = newUpvotes
          allItems.upVoted = false;
          replaceItem(allItems)
          setUpdateUpVote(allItems.upvotes)
        }
    
      }

  return (
    <button className={upVoteData.upVoteClass} id={upVoteData.upVoteId} onClick={()=> getUpvotes()}>
        <img src={upVoteData.img} alt="arrow-logo" />
        <p> {updateUpVote} </p>
    </button>
  )
}

export default Upvotes