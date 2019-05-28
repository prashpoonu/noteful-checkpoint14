import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DATA from '../dummystore';

export default class SideBarBack extends Component {
    render() {
        // console.log(this.props.match.params.noteId);
        // let noteId = this.props.match.params.noteId;

        let noteObject = DATA.notes.find(note => 
            note.id === this.props.match.params.noteId);
        // console.log(noteObject.folderId);

        let matchedFolderId = noteObject.folderId;
        // console.log(matchedFolderId);

        let folderObject = DATA.folders.find(folder => 
            folder.id === matchedFolderId);
        // console.log(folderObject);

        let folderName = folderObject.name;

        return (
            <>
                <h3>{folderName}</h3>
                <Link to={`/folders/${matchedFolderId}`}>
                    Back
                </Link>
            </>
        );
    }
}
