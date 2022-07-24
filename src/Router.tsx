import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import AddFeedback from './AddFeedback'
import EditFeedback from './EditFeedback'
import EachFeedback from './EachFeedback'
import Roadmap from './Roadmap'

const Router:React.FC = () => {
  return (
    <> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add-feedback" element={<AddFeedback />} />
            <Route path="feedback-content/:id" element={<EachFeedback />} />
            <Route path="edit-feedback/:id" element={<EditFeedback/>} />
            <Route path="roadmap" element={<Roadmap/>} />
        </Routes>
    </>
  )
}

export default Router