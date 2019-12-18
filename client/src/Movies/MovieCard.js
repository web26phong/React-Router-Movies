import React from 'react';

const MovieCard = props => {
  // const { title, director, metascore, stars } = props;
  const title = props.title;
  const id = props.id;
  const director = props.director;
  const metascore = props.metascore;
  const stars = props.stars;
  console.log(id);
  return (
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
  );
};

export default MovieCard;
