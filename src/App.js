import React from "react";
import "./App.css";
import Card from "./components/card";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

function App() {
  return (
    // <Router>
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Cards />
          {/* {this.props.chil} */}
        </main>
      </React.Fragment>
    
  );
}

// App.prototype={
//   children : PropTypes
// }


// App.defaultprp
export default App;
