import React, { useEffect, useState } from "react";
import "./Row.css";
import axois from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // a snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //in use effect every time a variable changes it becomes a dependecy
    //need to make a async call because I am sending a api call
    async function fetchData() {
      const request = await axois.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if the [] are blank the row loads once and does not load again
  }, [fetchUrl]);


  

  const handleClick = (movie) => {
    console.log("the movie name>>>",movie?.name)
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "").then((url) => {
          console.log("urls>>>>",url)
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("full link>>>>", urlParams);
          console.log("part link>>>>", urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters */}
      <div class="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() =>handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
    </div>
  );
}

export default Row;
