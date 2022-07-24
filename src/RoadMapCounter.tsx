import React from 'react'


interface roadMapCount {
    title:string,
    count:number,
    titleDescription:string
}

const RoadMapCounter:React.FC<roadMapCount> = ({title, count, titleDescription}:roadMapCount) => {
  return (
    <article className="roadMapCounter">
        <h5>{title}({count})</h5>
        <p> {titleDescription} </p>
    </article>
  )
}

export default RoadMapCounter