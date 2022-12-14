import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchURL, isLargeRow }) => {

  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition/variable

  useEffect(() => {
    // if [], run once when the row loads and dont run it again (if movies value changes, then this snippet code will run)

    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results);
      return request;

    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=DvYg4wdAaR8&ab_channel=JeremyLynch
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));

        }).catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      {/* title */}

      <h2 className='title'>{title}</h2>

      <div className="row_posters">

        {/* several row_poster(s) */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row-posterlarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}


      </div>
       {/* container -> posters */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>

     

    
  )
}

export default Row