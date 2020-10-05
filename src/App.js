import React, { useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Movies from "./components/Movies";
import TrendingNavBar from "./components/TrendingNavBar";

function App() {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    let cachedData = JSON.parse(localStorage.getItem("cachedData")) || null;
    if(cachedData && new Date().toDateString() !== cachedData.date) {cachedData = null; console.log("Cache was too old.")};
    if(cachedData) setData(cachedData.items)
    else{
      console.log("NO cached data");
      const fetchData = async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}`
        );
        const tmp = await res.json();
        const date = new Date().toDateString();
        localStorage.setItem("cachedData", JSON.stringify({"date": date, "items": tmp}));
        setData(tmp);
      };
      fetchData();
  }

  }, []);

  return (
    <>
      {/* ROUTING */}
      <Switch>
        <Route path={"/trending-movies/movie/:id"} render={() => {
          return(
            <>
              <TrendingNavBar path={"/trending-movies"}/>
              <About movies={data} path={"/trending-movies/movie/"} />
            </>)
        }}/>
        <Route path="/" render={()=> {
          return(
            <>
              <TrendingNavBar path={"/trending-movies"} />
              <Movies movies={data} path={"/trending-movies/movie/"} />
            </>)
        }}/>
      </Switch>
    </>
  );
}

export default App;
