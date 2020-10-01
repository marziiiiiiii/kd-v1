import React from 'react';
import Route from 'react-router/Route'
import Router from 'react-router/Router'
import IndexRoute from 'react-router/index'
import App from "./App";
import Card from "./components/card";
import About from "./components/about";
import NotFound from "./components/notFound";


const routes = () => (
    <Router>
        <Route>
            <IndexRoute path="/" component={App}/>
            <Route path="card/:id" component={Card}/>
            <Route path="about" component={About}/>
            {/* <Route path="card/:id" component={Card}/> */}
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)