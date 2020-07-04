import React from 'react';
import { API_KEY } from './config/config'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/landingPage'
import services from './AirtableService'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/success" component={LandingPage} />
      <Route exact path="/cancel" component={LandingPage} />
    </Router>
  );
}

export default App;
