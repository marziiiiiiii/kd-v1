import React from "react";
import "./App.css";
import Cards from "./components/cards";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Cards />
      </main>
    </React.Fragment>
  );
}

export default App;
