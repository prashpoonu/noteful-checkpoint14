import React, { Component } from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import DATA from '../dummystore';

// this has the filtered list of notes

export default class NoteListFiltered extends Component {
    render () {
        const folder = DATA.folders.find(folder => 
            folder.id === this.props.match.params.folderId); 
            //Important part )

        let notes = DATA.notes.map(note => {      // this is what's in the URL
            if (folder.id === note.folderId) {
                return <Note key={note.id} {...note} />
            }
            return null;
        });

        return (
            <section aria-label="notelist" className="notelist">
                {notes}
                <AddNote />
            </section>
        )
    }
}
