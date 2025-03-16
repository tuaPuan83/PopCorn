import App from "./App";
import { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

function MainPage({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default MainPage;
