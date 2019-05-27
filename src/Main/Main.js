import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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