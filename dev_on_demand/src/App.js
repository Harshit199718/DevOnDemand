import React from 'react';
import { API_KEY } from './config/config'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/landingPage'
import services from './AirtableService'
import './App.css';

function App() {
  var name1 = "Email"
  var data = new Date()

  services.addRecords([
    {
        fields: {
          [window.FIELD_2]: 9589099335,
          [window.FIELD_3]: "https://i.stack.imgur.com/GsDIl.jpg",
          [window.FIELD_1]: "divyamupadhyay884@gmail.com",
          [window.FIELD_4]:data.toLocaleDateString('en-Us')
        }
    },
    {
        fields: {
          [window.FIELD_1]: "divyamupadhyay884@gmail.com",
          [window.FIELD_2]: 9589099335,
          [window.FIELD_3]: "https://i.stack.imgur.com/GsDIl.jpg",
          [window.FIELD_4]:data.toLocaleDateString('en-Us')
        }
    }
])
  return (
    <Router>
      <Route path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
