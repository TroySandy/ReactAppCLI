import React, { useState } from "react";
import MovieAppDisplay from "./MovieAppDisplay";

const MovieApp = () => {
  const [result, setResult] = useState();
  const [query, setQuery] = useState("");

  const fetcher = () => {
    let api_key = "0e1090009d1d1898eb6d0d808ff89446";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;
    
    console.log(url);
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("fetch error");
        } else return res.json();
      })
      .then((json) => {
        console.log(json);
        if (json.results.length === 0) {
          throw new Error("no results!");
        } else {
          const movieNum = Math.floor(Math.random() * json.results.length);
          setResult(json.results[movieNum]);
          console.log(json.results[movieNum]);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={fetcher}>Click for Movie Pic Search</button>
        {!result || !result.poster_path ? null : (
          <MovieAppDisplay movie={result} />
        )}
      </div>
    </div>
  );
};

export default MovieApp;
