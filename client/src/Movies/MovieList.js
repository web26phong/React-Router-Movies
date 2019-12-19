import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          const results = response.data.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm)
          );
          setSearchResults(results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, [searchTerm]);
  
  return (
    <div className="movie-list">
      <form>
        <label htmlFor="search">Search for a movie: </label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="type a title here to search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      
      {searchResults.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} id={movie.id} title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars}/>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
