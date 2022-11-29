import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
     }

    return (

        <header className='banner'

            style={{
                backgroundSize: "cover",
               backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            {/* header will have a background image */}

            <div className="banner-contents">

                {/* title */}
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                
                {/* description */}
                <h1 className='banner-description'>
                   {truncate(movie?.overview, 150)}
                </h1>

                {/* div > 2 buttons */}
                <div className="banner-buttons">
                <a href=""><button className='banner-button1'>Play</button></a>
                <a href=""><button className='banner-button2'>More Info</button></a>
                </div>
            </div>

            <div className="banner-fadeBottom"></div>


        </header>
    )
}

export default Banner