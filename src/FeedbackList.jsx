import React, { useState } from "react";
import "./FeedbackList";

function FeedbackList({form, feed}){

return(<div>
    
      {feed.map((feeds, index) => (
        <div key={index}>
          <p><strong>{feeds.name}</strong> ({ffeds.subject}) score: {feeds.rating}/5</p>
          <p>{feed.description}</p>
        </div>
      ))}
    </div>
  );




}export default FeedbackList