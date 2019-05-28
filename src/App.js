import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main/Main';
import './App.css';
import SideBar from './SideBar/SideBar';
import NoteList from './NoteList/NoteList';
import NoteListFiltered from './NoteList/NoteListFiltered';
import Folder from './Folder/Folder';
import Note from './Note/Note';
import NoteContent from './Note/NoteContent'

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
            path="/note/:noteId" //note.id
            render={routingProps =>{
             return (
              <NoteContent       //Made new component for rendering note content after link from Note.js is clicked - followed
                                //solution example to render the prop containing the content from NoteListFiltered.js to see if I could get it to go to NoteContent.
                                // Wasn't able to figure it out. I couldn't pass the prop that contained the note content inside of Note.js or NotelistFiltered.js
                                //without putting an instance of it there (i.e. the content would show up on the notecard itself as opposed to showing up on the page after the note linked was clicked.)
                                //using your NoteListFiltered function, how can I pass the prop without displaying it in the wrong place?
                            
              {...routingProps}
             /> )}}
            
            />

        </main>
      </div>
    );
  }
}
