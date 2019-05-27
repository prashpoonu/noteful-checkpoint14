import React, { Component } from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import DATA from '../dummystore';

// this shows everything (all the notes)

export default class NoteList extends Component {
    render () {
        let notes = DATA.notes.map(note => 
            <Note {...note} />
        );

        return (
            <section aria-label="notelist" className="notelist">
                {notes}
                <AddNote />
            </section>
        )
    }
}
