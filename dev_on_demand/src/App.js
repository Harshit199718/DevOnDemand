import React from 'react';
import { API_KEY } from './config/config'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/landingPage'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
