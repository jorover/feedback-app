import React from 'react'
import GoBack from './GoBack'
import Button from './Button'
import ChangeRoute from './ChangeRoute'

const RoadMapTopBar = () => {

  return (
    <section className="roadMapTopBarContainer">
        <article>
            <GoBack />
            <h2> Roadmap </h2>
        </article>

        <Button 
        content="+ Add Feedback" 
        link="" 
        mainBtn="btn" 
        btnPrimary="btn-primary" 
        click={()=> ChangeRoute(`add-feedback`)}
        type="button"
        inputVal="" />
    </section>
  )
}

export default RoadMapTopBar