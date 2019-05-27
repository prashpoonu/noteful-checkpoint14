import React, { Component } from 'react';
import Note from '../Note/Note';
import { Route, Link } from 'react-router-dom';

export default class NoteList extends Component {
    render () {
        return (
          <section aria-label="notes-list" className="notes-list">
              <Route
                path="/note"
                component={Note} />
              <Note />
              <Note />
              <Note />
          </section>
        )
    }
}