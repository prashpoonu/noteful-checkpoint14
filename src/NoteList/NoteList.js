import React, { Component } from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';

export default class NoteList extends Component {
    render () {
        return (
            <section aria-label="notes-list" className="notes-list">
                <Note />
                <Note />
                <Note />
                <AddNote />
            </section>
        )
    }
}
