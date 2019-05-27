import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main/Main';
import './App.css';
import SideBar from './SideBar/SideBar';
import NoteList from './NoteList/NoteList';
import NoteListFiltered from './NoteList/NoteListFiltered';
import Folder from './Folder/Folder';
import Note from './Note/Note';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1><Link to='/'>Noteful</Link></h1>
        </header>

        <main role="main" className="main">
          {/* <Main /> */}
          <Route 
            exact path="/"
            component={Main}
            />

          
          <Route  // what goes in the address bar
            path="/folder/:folderId"  //that colon is some variable that's passed in
            component={SideBar}
            />
          
          <Route
            path="/folder/:folderId" //folder.id
            component={NoteListFiltered}
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
