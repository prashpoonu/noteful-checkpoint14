import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Folder extends Component {
    // don't worry about constructor props, maybe when doing state
    render() {
        return (
            <h2 className="folder">
               {this.props.name}
            </h2>
        );
    }
}
