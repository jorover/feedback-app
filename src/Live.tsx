import React from 'react'
import RoadMapSlideShow from './RoadMapSlideShow'
import GetRoadMapData from './GetRoadMapData'
import RoadMapCounter from './RoadMapCounter'
import EachRoadMap from './EachRoadMap'
import { addRemoveClassList } from './changeRoadMap'
import { item } from './roadMapClass'

const Live:React.FC<item> = ({innerClass}:item) => {
    const [mainData] = GetRoadMapData('live')
  return (
    <section className="roadMapFeatures">
        <RoadMapSlideShow 
        title="Live" 
        count={mainData.length} 
        titleDescription="" 
        lowBarColor="inner-live-bar"
        changeClass={()=> addRemoveClassList('in-live', 'plan', 'progress', 2)} />
        <RoadMapCounter title="Live" count={mainData.length} titleDescription="Released features" />
        <section className={innerClass}>
            {mainData &&
                mainData.map(item => {
                    const {id, status, title, description, category, upvotes, comments} = item;
                    return (
                        <EachRoadMap
                        key={id} 
                        id={id}
                        eachClass="live-bar" 
                        status={status}
                        title={title}
                        description={description}
                        comments={comments}
                        upvotes={upvotes}
                        category={category}
                        circle="thirdCircle"
                        circleTitle="Live"
                        allItems={item} />
                    )
                })
            }
        </section>
    </section>
  )
}

export default Live