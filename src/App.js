import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import CardDemoList from "./components/cardDemoList/cardDemoList";
import Collections from "./pages/collections/colections.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/birthday" component={CardDemoList} />
          <Route exact path="/collections" component={Collections} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
