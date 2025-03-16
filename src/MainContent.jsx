import App from "./App";
import { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

function MainPage({ movies, tempMovieData, tempWatchedData }) {
  return (
    <main className="main">
      <ListBox tempMovieData={tempMovieData} movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
}

export default MainPage;
