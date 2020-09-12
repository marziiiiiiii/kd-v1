import React from "react";
import "./App.css";
import Card from "./components/card";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Card />
      </main>
    </React.Fragment>
  );
}

export default App;
