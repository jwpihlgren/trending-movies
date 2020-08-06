import React, { useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Movies from "./components/Movies";
import TrendingNavBar from "./components/TrendingNavBar";

function App() {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    /* API CALL */
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}`
      );
      const tmp = await res.json();
      setData(tmp);
    };
    fetchData();

  }, []);

  console.log("test");

  return (
    <>
      {/* ROUTING */}
      <Switch>
        <Route path={"/movie/:id"} render={() => {
          return(
            <>
              <TrendingNavBar path={"/"}/>
              <About movies={data} path={"/movie/"} />
            </>)
        }}/>
        <Route path="/" render={()=> {
          return(
            <>
              <TrendingNavBar path={"/"} />
              <Movies movies={data} path={"/movie/"} />
            </>)
        }}/>
      </Switch>
    </>
  );
}

export default App;
