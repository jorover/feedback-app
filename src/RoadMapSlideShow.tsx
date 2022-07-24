import React from 'react'
import RoadMapCounter from './RoadMapCounter'
import { roadmaptitle } from './roadMapTitle'



const RoadMapSlideShow:React.FC<roadmaptitle> = ({title, count, titleDescription, lowBarColor, changeClass}:roadmaptitle) => {

  return (
    <article className="roadMapSlideShow" onClick={changeClass}>
        <RoadMapCounter title={title} count={count} titleDescription={titleDescription}/>
        <div className={`${lowBarColor} bar-color`}></div>
    </article>
  )
}

export default RoadMapSlideShow