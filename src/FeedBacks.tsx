import React from 'react'
import { datas } from './datalist'
import FeedBack from './FeedBack'
import NoFeedBack from './NoFeedBack'


export interface feedbackValues {
  feedbackData:datas[],
  noFeedBack:string,
  filterData:Function
}

const FeedBacks:React.FC<feedbackValues> = ( { feedbackData, noFeedBack, filterData }:feedbackValues ) => {

  return (
    <section>
        {
          feedbackData.length !== 0 ?
          feedbackData.map(item => {
            const {id, title, category, upvotes, upVoted, status, description, comments} = item;
            return (
                  <FeedBack 
                  key={id}
                  id={id}
                  title={title} 
                  category={category} 
                  upvotes={upvotes}
                  upvoted={upVoted}
                  status={status}
                  description={description}
                  comments={comments}
                  allItems={item}/>
            )
          }) : <NoFeedBack noFeedBack={noFeedBack} />
        }
    </section>
  )
}

export default FeedBacks