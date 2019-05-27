import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main/Main';
import './App.css';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1><Link to='/'>Noteful</Link></h1>
        </header>

        <main role="main">
          {/* <Main /> */}
          <Route 
            exact path="/"
            component={Main} />
          
          <Route
            path="/folder" //folder.id
            component={Folder} />

          <Route
            path="note" ///note.id
            component={Note} />
        </main>
      </div>
    );
  }
}
