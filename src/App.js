import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main/Main';
import './App.css';
import Folder from './Folder/Folder';
import Note from './Note/Note';

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
            render={() => 
              <Main />}
            />
          
          <Route
            path="/folder" //folder.id
            render={() =>
              <Folder />}
            />

          <Route
            path="note" //note.id
            render={() =>
              <Note />}
            />
        </main>
      </div>
    );
  }
}
