import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../src/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navigation />

    
      </div>
    );
  }
}

export default App;
