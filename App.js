import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Batman');

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const fetchMovies = async (query) => {
    const API_KEY = 'edd375ca'; // Replace with your OMDb API key
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Search</h1>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
