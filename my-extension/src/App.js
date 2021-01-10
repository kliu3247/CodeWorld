import './App.css';
import Homepage from './Pages/Homepage';
import Explore from './Pages/Explore';
import Hubgames from './Pages/Hubgames';
import Quiz from './Pages/Quiz';
import Success from './Pages/Success';

import React, { Component } from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className="App">

          <div id = "page-body">
            <Route path="/" component ={Homepage} exact />
            <Route path="/Explore" component ={Explore} exact />
            <Route path="/Hubgames" component ={Hubgames} exact />
            <Route path="/Quiz" component ={Quiz} exact />
            <Route path="/Success" component ={Success} exact />

          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App
