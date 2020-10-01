import React from "react";
import "./App.css";
import Card from "./components/card/card";
import CardDemoList from "./components/cardDemoList/cardDemoList";
import Navbar from "./components/navbar/navbar";
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
          <CardDemoList />
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
