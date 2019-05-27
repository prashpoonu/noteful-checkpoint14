import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main/Main';
import './App.css';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Noteful</h1>
        </header>

        <main role="main">
          {/* <Main /> */}
          <Route 
            exact path="/"
            component={Main} />
        </main>
      </div>
    );
  }
}
