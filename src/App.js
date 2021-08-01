import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
