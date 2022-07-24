import React from 'react'
import RoadMapSlideShow from './RoadMapSlideShow'
import GetRoadMapData from './GetRoadMapData'
import RoadMapCounter from './RoadMapCounter'
import EachRoadMap from './EachRoadMap'
import { addRemoveClassList } from './changeRoadMap'
import { item } from './roadMapClass'

const InProgress:React.FC<item> = ( {innerClass}:item ) => {
    const [mainData] = GetRoadMapData('in-progress')
  return (
    <section className="roadMapFeatures">
        <RoadMapSlideShow 
        title="In-Progress" 
        count={mainData.length} 
        titleDescription="" 
        lowBarColor="inner-in-progress-bar"
        changeClass={()=> addRemoveClassList('progress', 'plan', 'in-live', 1)} />
        <RoadMapCounter title="In-Progress" count={mainData.length} titleDescription="Currently being developed" />
        <section className={innerClass}>
            {mainData &&
                mainData.map(item => {
                    const {id, status, title, description, category, upvotes, comments} = item;
                    return (
                        <EachRoadMap
                        key={id} 
                        id={id}
                        eachClass="in-progress-bar" 
                        status={status}
                        title={title}
                        description={description}
                        comments={comments}
                        upvotes={upvotes}
                        category={category}
                        circle="secondCircle"
                        circleTitle="In-Progress" 
                        allItems={item} />
                    )
                })
            }
        </section>
    </section>
  )
}

export default InProgress