import clases from "./Home.module.css";
import Card from "../Cardcontainer";
import React, { useEffect, useState } from "react";
import SearchIcon from "../Search.svg";
import { Outlet } from "react-router-dom";
//4d0e36ce
const API_URL = "http://www.omdbapi.com?apikey=4d0e36ce";

// const movie1 = {
//   Title: "Italian Spiderman",
//   Year: "2007",
//   imdbID: "tt2705436",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
// };
const Home = () => {
  const [movies, setMovie] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
    console.log(data);
  };

  const [inputSearchformovies, setinputSearchformovies] = useState();
  const WhatistheMovie = (e) => {
    setinputSearchformovies(e.target.value);
  };

  const Searchformovies = () => {
    searchMovies(inputSearchformovies);
  };
  useEffect(() => {
    searchMovies("batman");
    console.log(1);
  }, []);

  return (
    <div className={clases.app}>
      <h1>Movieland</h1>
      <div className={clases.search}>
        <input
          value={inputSearchformovies}
          placeholder="Search for movies"
          onChange={WhatistheMovie}
        />
        <img src={SearchIcon} alt="Search" onClick={Searchformovies} />
      </div>

      {movies.length > 0 ? (
        <div className={clases.container}>
          {movies.map((movie) => (
            <Card item={movie} key={Math.random()} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Home;
