import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Nav from "./Nav";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      {/* banner */}
      <Row
        title="NETFLIX ORIGINIALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row
        title="Documaentaries Movies"
        fetchUrl={request.fetchDocumaentariesMovies}
      />
    </div>
  );
}

export default App;
