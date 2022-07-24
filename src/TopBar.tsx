import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderList from './HeaderList'
import HeaderRoadmap from './HeaderRoadmap'
import { menuOptions } from './topBarlist'
import { feedbackValues } from './FeedBacks'
import { displayFeedBack } from './HideDisplayFeedBack'
import FeedBackHamburger from './FeedBackHamburger'


const TopBar: React.FC<feedbackValues> = ( { feedbackData, filterData }:feedbackValues) => {



  const openMenu = () => {   
    if(document.body.classList.contains('openMenu')){
      document.body.classList.remove('openMenu', 'overlayOpen')
      document.body.style.overflow = 'scroll'
    } else {
      document.body.classList.add('openMenu', 'overlayOpen')
      document.body.style.overflow = 'hidden'
    }

    displayFeedBack();
  }

  return (
    <>
    <FeedBackHamburger hamburger={openMenu} />
    <section className="container topBarContainer">
        <HeaderLogo hamburger={openMenu}  />
        <HeaderList headerlistContainer="headerListContainer" 
        headerCategorry="headerCategory" feedbackValues={feedbackData} filterData={filterData} />
        <HeaderRoadmap roadMapContainer="roadMapContainer" 
        roadMapContent="roadMapContent" 
        roadMapContentContainer="roadMapContentContainer" />
    </section>
    <div className={menuOptions.overlay}></div>
  </>
   )
}

export default TopBar