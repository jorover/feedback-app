import React from 'react'
import RoadMapTopBar from './RoadMapTopBar'
import Planned from './Planned'
import InProgress from './InProgress'
import Live from './Live'
import { addRemoveClassList } from './changeRoadMap'


const Roadmap = () => {
 
  React.useEffect(()=> {
    addRemoveClassList('plan', 'progress', 'in-live', 0)
  }, [])

  return (
    <section className="roadMapSection">
        <RoadMapTopBar />
        <section className="roadMapSectionContent">
            <Planned innerClass="roadMapDisplayContent" />
            <InProgress innerClass="roadMapDisplayContent"  />
            <Live innerClass="roadMapDisplayContent"  />
        </section>

        <section className="innerRoadMapSectionContent">
            <Planned innerClass="innerRoadMapDisplayContent"  />
            <InProgress innerClass="innerRoadMapDisplayContent" />
            <Live innerClass="innerRoadMapDisplayContent" />
        </section>

    </section>
  )
}

export default Roadmap