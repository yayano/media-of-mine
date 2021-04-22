import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Upload from './pages/Upload.js';
import Home from './pages/Home.js';
import About from './pages/About';
import NotFound from './pages/404';
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
