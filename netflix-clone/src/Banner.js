import React, { useEffect, useState } from "react";
import "./Banner.css";
import axois from "./axios";
import requests from "./request";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axois.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log("movie selected>>>>", movie);
  function truncate(str, n){
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div class="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.orignial_name}</h1>
        <div class="banner__buttons">
          <button class="banner__button">Play</button>
          <button class="banner__button">My List</button>
        </div>
       
        <h1 class="banner__description">
            {truncate(movie?.overview, 200)}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
