import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Fibonacci from './components/fibonacci/Fibonacci';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/fibonacci" component={Fibonacci} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
