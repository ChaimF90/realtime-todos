import * as React from 'react';
import './App.css';
import AuthPage from './components/Auth/AuthPage'
import LandingPage from './components/Landing/LandingPage';
import TasksPage from './components/Tasks/TasksPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/register" component={AuthPage}/>
          <Route path="/login" component={AuthPage}/>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/tasks" component={TasksPage} />
        </div>
      </Router>
    );
  }
}

export default App;
