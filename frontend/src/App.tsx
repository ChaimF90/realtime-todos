import * as React from 'react';
import './App.css';
import RegisterPage from './components/register/RegisterPage'
import LandingPage from './components/Landing/LandingPage';
import { AppState } from './Types/interfaces';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component<{}, AppState> {
  constructor() {
    super();
    this.state = {
      hasToken: false
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('realtimeToken');
    if (token) {
      this.setState({ hasToken: true });
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/" component={LandingPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
