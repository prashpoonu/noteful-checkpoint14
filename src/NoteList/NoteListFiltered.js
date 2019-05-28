import React, { Component } from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import DATA from '../dummystore';
import NotePageMain from '../../../noteful-client/src/NotePageMain/NotePageMain';
import notePageContent from '../Note/NoteContent';

// this has the filtered list of notes

export default class NoteListFiltered extends Component {
    
    render () {
        console.log(this.props)
        const folders = DATA.folders.find(folder => folder.id === this.props.match.params.folderId); 
            //Important part )

        let notes = DATA.notes.map(note => {            // this is what's in the URL
            if (folders.id === note.folderId) {
                return <Note {...note}/>
            }
        });

        return (
            <section aria-label="notelist" className="notelist">
                {notes}
                <AddNote />
            </section>
        )
    }
}
