import React from 'react'
import NofeedBackLogo from './NofeedBackLogo'
import Button from './Button'

interface noFeed{
    noFeedBack:string
}

const NoFeedBack:React.FC<noFeed> = ( {noFeedBack}:noFeed ) => {
  return (
    <section className="noFeedBacks"> 
        <NofeedBackLogo />
        <article className="noFeedBackContent"> 
        <h3> There is no {noFeedBack === 'all' ? 'All' : noFeedBack} feedback yet </h3>
        <p> Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app. </p>
        <Button 
        mainBtn="btn" 
        btnPrimary="btn-primary" 
        content="+ Add Feedback" 
        link="add-feedback"
        click={()=> console.log('blue')}
        type="button"
        inputVal="" />
        </article>
    </section>
  )
}

export default NoFeedBack