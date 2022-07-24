
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderRoadmap = ( {roadMapContainer, roadMapContent, roadMapContentContainer }:any ) => {


  return (
    <section className={roadMapContainer}>
      <header className={roadMapContent}>
         <h4> RoadMap </h4>
         <Link to="/roadmap" className="roadMapLink"> 
          View 
         </Link>
      </header>
      
      <section className={roadMapContentContainer}>
        <article className={roadMapContent}>
          <div className="circle firstCircle"></div>
          <h6> Planned </h6>
          <small> 2 </small>
        </article>

        <article className={roadMapContent}>
        <div className="circle secondCircle"></div>
          <h6> In-Progress </h6>
          <small> 3 </small>
        </article>

        <article className={roadMapContent}>
        <div className="circle thirdCircle"></div>
        <h6> Live </h6>
        <small> 1 </small>
        </article>
      </section>
    </section>
  )
}

export default HeaderRoadmap