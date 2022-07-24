import React from 'react'
import GoBack from './GoBack'
import Button from './Button'
import { useParams } from 'react-router'
import ShareData from './ShareData'
import FeedBack from './FeedBack'
import Comments from './Comments'
import AddComments from './AddComment'
import ChangeRoute from './ChangeRoute'

type param = {
  id:string | undefined
}

const EachFeedback = () => {

  let {id} = useParams<param>()
  const [mainData] = ShareData(id)

  return (
    <section className="eachFeedBackContainer">
          <header className="eachFeedBackHeader">
              <GoBack />
              <Button link="" 
              mainBtn="btn" 
              btnPrimary="btn-edit" 
              content="Edit Feedback" 
              inputVal=""
              click={()=> ChangeRoute(`edit-feedback/${id}`)}
              type="button" />
          </header>

          {
            mainData &&
            mainData.map(t => {
              const {id, title, category, upvotes, upVoted, status, description, comments} = t;
              return (
              <section key={id}>
                <header className="innerEachFeedBack">
                    <FeedBack
                    id={id}
                    title={title} 
                    category={category} 
                    upvotes={upvotes}
                    upvoted={upVoted}
                    status={status}
                    description={description}
                    comments={comments}
                    allItems={t}/>
                </header>

                <section>
                  <Comments allItems={t} />
                  <AddComments allItems={t} />
                </section>
              </section>
              )
            })
          }
    </section>
  )
}

export default EachFeedback