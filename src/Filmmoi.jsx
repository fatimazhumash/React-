import React, { useState } from "react";
import "./Filmmoi.css";

export default function Filmmoi() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    poster: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleAddMovie = () => {
    if (form.title && form.description && form.poster) {
      setMovies([...movies, form]);
      setForm({ title: '', description: '', poster: '' });
    }
  };

  return (
    <div className="filmmoi">
      <h1>Film Moi</h1>
      <input
        type="text"
        name="title"
        placeholder="Атауы"
        value={form.title}
        onChange={handleChange}
      />
      <input 
        type="text"
        name="description"
        placeholder="Сипаттамасы"
        value={form.description}
        onChange={handleChange}
      />
      <input 
        type="text"
        name="poster"
        placeholder="Постер URL"
        value={form.poster}
        onChange={handleChange}
      />
      <button onClick={handleAddMovie}>Қосу</button>

      <h3>Фильмдер тізімі</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h4  >{movie.title}</h4>
             <p >{movie.description}</p>
            <img src={movie.poster} alt={movie.title} width="150" />
          </li>
        ))}
      </ul>
    </div>
  );
}
