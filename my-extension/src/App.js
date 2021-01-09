import './App.css';
import HomePage from './pages/HomePage';
import React, { Component } from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

import Navbar from './Navbar';

import ScrollToTopRoute from './components/ScrollToTopRoute';

class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className="App">
          <Navbar />

          <div id = "page-body">
            <Route path="/" component ={HomePage} exact />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;