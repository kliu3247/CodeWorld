import './App.css';
import HomePage from './Pages/Homepage';
import Explore from './Pages/Explore';
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
          <Navbar />

          <div id = "page-body">
            <Route path="/" component ={Homepage} exact />
            <Route path="/Explore" component ={Explore} exact />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;