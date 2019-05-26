import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Noteful</h1>
        </header>

        <main role="main">
        <section aria-label="home-page" className="home-page">
          {/* Route - exact path "/"
          // displays folders and sidebar with notes */}
        </section>
        <section aria-label="folders-notes" className="folders-notes">
          {/* Route - dynamic path "/note/:folder.id"
          // displays folder list w/ only notes in selected folded (filtered) */}
        </section>
        <section aria-label="note-detail" className="note-detail">
          {/* Route - dynamic path "/note/:note.id"
          // displays only note with sidebar showing section w/ back button */}
        </section>
        </main>
      </div>
    );
  }
}

