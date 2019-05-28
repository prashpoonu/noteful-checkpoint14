import React, { Component } from 'react';
import DATA from '../dummystore';

export default class NoteDetail extends Component {
    render() {

        let noteObject = DATA.notes.find(note => 
            note.id === this.props.match.params.noteId);
            // console.log(noteObject.content);
        
        let noteName = noteObject.name;
        let content = noteObject.content;
        let modified = noteObject.modified;
        
        return (
            // <div>
            //     Whatever
            // </div>
            <>
                <h2 className="note">
                    {noteName}
                </h2>

                <p>Date Modified: {modified}</p>
                <p>{content}</p>
                <button>Delete Note</button>
            </>
        )
    }
}
