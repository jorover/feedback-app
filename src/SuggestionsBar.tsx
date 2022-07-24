import React from 'react'
import Bulb from '../src/blb.png'
import Button from './Button'
import { customList } from './customDataList'
import CustomSelect from './CustomSelect'
import { selectData } from './selectData'

interface votesComment {
    upvotesComments:Function,
    dataCount:Function,
    customData:customList
}

const SuggestionsBar:React.FC<votesComment> = ({upvotesComments, customData, dataCount}:votesComment) => {

  return (
    <section className="container suggestionsContainer">
        <figure className="suggestionsContent">
            <img src={Bulb} alt="bulb-logo" />
            <figcaption className="dataCount">
                <h4> {dataCount()} </h4>
                <h4> {dataCount() <= 1 ? 'Suggestion' : 'Suggestions' } </h4>
            </figcaption>
        </figure>

        <form className="sortFormContainer suggestionsContent">
            <CustomSelect upDateData={upvotesComments} selectData={selectData} customData={customData} />
        </form>

        <aside className="btnSuggestion">
            <Button 
            link="add-feedback" 
            btnPrimary="btn-primary" 
            mainBtn="btn" 
            content="+ Add Feedback" 
            click={()=> console.log('red')}
            type="button"
            inputVal="" />
        </aside>
    </section>
  )
}

export default SuggestionsBar