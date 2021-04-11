import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './request';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'




const baseURL = ' https://image.tmdb.org/t/p/original';
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setmovies(request.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl])
        const opts = {

        height : "390",
        width: "100%",
        playerVars : {
            autoplay : 1,
        }

        };

        const handelClick =(movie) => {

          if(trailerUrl){
              setTrailerUrl("");
          }else{
              movieTrailer(movie?.name || "" )
              .then((url) => {
                const urlParams= new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
              })
              .catch((error)=>console.log(error));

          }



        };
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {/* {container-> posters} */}
                {movies.map(movie => (

                    <img
                        key={movie.id}  onClick = { () => handelClick(movie)}
                        className={`row_poster ${isLargeRow && "row_poster_large"}`}
                        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
         { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
