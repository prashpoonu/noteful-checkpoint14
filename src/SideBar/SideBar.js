import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import AddFolder from '../AddFolder/AddFolder';

export default class SideBar extends Component {
    render () {
        return (
            <section aria-label="sidebar" className="sidebar">
                <Folder />
                <Folder />
                <Folder />
                <AddFolder />
            </section>
        );
    }
}
