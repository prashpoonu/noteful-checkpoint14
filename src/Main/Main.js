import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';

export default class Main extends Component {
    render () {
        return (
            <>
                <SideBar />
                <NoteList />
            </>
        );
    }
}
