import React, { useState } from "react";
import "./FeedbackList";

function FeedbackList({form, feed}){

return(<div>
    
      {feed.map((item, index) => (
        <div key={index}>
          <p><strong>{item.name}</strong> ({item.subject}) score: {item.rating}/5</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );




}export default FeedbackList