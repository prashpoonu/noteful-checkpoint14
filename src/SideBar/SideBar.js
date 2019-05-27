import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import { Route, Link } from 'react-router-dom';

export default class SideBar extends Component {
    render () {
        return (
            <section aria-label="sidebar" className="sidebar">
                <Folder />
                <Folder />
                <Folder />
            </section>
        );
    }
}