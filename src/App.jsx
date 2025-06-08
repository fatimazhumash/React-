
import React from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import { useState } from 'react';

 function App(){
 const [feedbacks,setFeedbacks]=useState([])
 const addFeedback=(newFeedbacks)=>{
  setFeedbacks([newFeedbacks,...feedbacks])
 }
return (
<div>
  <h1></h1>
  <FeedbackForm onAdd={addFeedback}/>
  <FeedbackList feed={feedbacks}/>
</div>
)

 }
export default App;

  











