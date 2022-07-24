import React from 'react'
import RoadMapSlideShow from './RoadMapSlideShow'
import GetRoadMapData from './GetRoadMapData'
import RoadMapCounter from './RoadMapCounter'
import EachRoadMap from './EachRoadMap'
import { addRemoveClassList } from './changeRoadMap'
import { item } from './roadMapClass'



const Planned:React.FC<item> = ( {innerClass}:item ) => {

    const [mainData] = GetRoadMapData('planned')
  return (
    <section className="roadMapFeatures">
        <RoadMapSlideShow 
        title="Planned" 
        count={mainData.length} 
        titleDescription="" 
        lowBarColor="inner-planned-bar"
        changeClass={()=> addRemoveClassList('plan', 'progress', 'in-live', 0)} />
        <RoadMapCounter title="Planned" count={mainData.length} titleDescription="Ideas prioritized for research" />
        <section className={innerClass}>
            {mainData &&
                mainData.map(item => {
                    const {id, status, title, description, upvotes, comments, category} = item;
                    return (
                       <EachRoadMap 
                        key={id} 
                        id={id}
                        eachClass="planned-bar" 
                        status={status}
                        title={title}
                        description={description}
                        comments={comments}
                        upvotes={upvotes}
                        category={category}
                        circle="firstCircle"
                        circleTitle="Planned"
                        allItems={item} />
                    )
                })
            }
        </section>
    </section>
  )
}

export default Planned