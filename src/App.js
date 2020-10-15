import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import CardDemoList from "./components/cardDemoList/cardDemoList";
import Collections from "./pages/collections/colections.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/birthday" component={CardDemoList} />
        <Route exact path="/collections" component={Collections} />
      </Switch>
    </div>
  );
}

export default App;
