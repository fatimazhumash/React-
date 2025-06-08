import React, { useState } from "react";

function FeedbackForm() {
  const [feed, setFeed] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    subject: "",
    rating: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.description && form.subject && form.rating) {
      const newFeedback = {
        ...form,
        id: Date.now()
      };
      setFeed([...feed, newFeedback]);
      setForm({ name: "", description: "", subject: "", rating: "" });
    } 
  };

  const removeFeedback = (id) => {
    setFeed(feed.filter((item) => item.id !== id));
  };

  return (
    <div className="feedback-form">
      <h1 style={{ textAlign: 'center' }}>📢 Student Feedback App</h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          style={{ width: '400px', height: '40px', margin: '20px' }}
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <textarea
          style={{ width: '400px', height: '80px', margin: '20px' }}
          name="description"
          placeholder="Your thoughts"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <select
          style={{ width: '400px', height: '40px', margin: '20px' }}
          name="subject"
          value={form.subject}
          onChange={handleChange} >
          
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Geography">Geography</option>
          <option value="Music">Music</option>
        </select>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <select
          style={{ width: '400px', height: '40px', margin: '20px' }}
          name="rating"
          value={form.rating}
          onChange={handleChange}>
        
          <option value="1">1 - </option>
          <option value="2">2 - </option>
          <option value="3">3 - </option>
          <option value="4">4 - </option>
          <option value="5">5 - </option>
        </select>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ width: '100px', height: '40px', margin: '20px' ,  background: 'green',
                color: 'white',}}
          onClick={handleSubmit}>Submit</button>
      </div>

     
      <div style={{ width: '400px', margin: '',border:'15px' ,borderColor:'black'}}>
        {feed.map((e) => (
          <div key={e.id}
            style={{
              padding: '10px',
            }}>
            <h3>{e.name}</h3>
            <p> {e.subject}</p>
            <p> {e.description}</p>
            <p>{e.rating}</p>
            <button onClick={() => removeFeedback(e.id)}
            style={{  background: 'red',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '4px',
                }}  >Delete </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackForm;

