import React, { useEffect, useState } from "react";
import "./Row.css";
import axois from "./axios";


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

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

  console.log("movies>>>>", movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters */}
      <div class="row__posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
