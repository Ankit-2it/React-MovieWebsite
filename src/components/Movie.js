import React from "react";

const Movie = ({movie}) => {
    return(
        <div className="movie">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-details">
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
};

export default Movie;