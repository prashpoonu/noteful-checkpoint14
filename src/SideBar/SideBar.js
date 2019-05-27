import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Folder from '../Folder/Folder';
import AddFolder from '../AddFolder/AddFolder';
import DATA from '../dummystore';

export default class SideBar extends Component {
    render () {
        let folders = DATA.folders.map(folder => 
            <Link to={`/folder/${folder.id}`}>
                <Folder name={folder.name} id={folder.id} />
            </Link>
        );

        return (
            <section aria-label="sidebar" className="sidebar">
                {folders}
                <AddFolder />
            </section>
        );
    }
}
