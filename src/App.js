import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main/Main';
import './App.css';
import SideBar from './SideBar/SideBar';
import SideBarBack from './SideBar/SideBarBack';
import NoteListFiltered from './NoteList/NoteListFiltered';
import NoteDetail from './Note/NoteDetail';

export default class App extends Component {
  state = {
    folders: [],
    notes: []
  }

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
            path="/folders/:folderId"  //that colon is some variable that's passed in
            component={SideBar}
            />
          <Route
            path="/folders/:folderId" //folder.id
            component={NoteListFiltered}
            />


          <Route 
            path="/notes/:noteId"
            component={SideBarBack}
            // component needs to be the sidebar with the back button
            />
          
          <Route
            path="/notes/:noteId"
            component={NoteDetail}
            // component needs to be note content
          />
        </main>
      </div>
    );
  }
}
