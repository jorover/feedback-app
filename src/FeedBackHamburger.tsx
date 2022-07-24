import React from 'react'
import Logo from '../src/hgr.png'

interface menu {
    hamburger:Function
}

const FeedBackHamburger:React.FC<menu> = ( {hamburger}:menu) => {
  return (
    <figure className="feedbackLogoContainer">
          <figcaption>
              <h4> FrontEnd Mentor </h4>
              <p> Feedback Board </p>
          </figcaption>

          <aside className="logoAside">
          <img src={Logo}  alt="hamburger" onClick={()=>hamburger()}/>
        </aside>
    </figure>
  )
}

export default FeedBackHamburger