import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import notePageContent from './noteContent'


export default class Note extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <h2 className="note">
                <Link to={`/note/${this.props.id}`}>
                    {this.props.name}
                </Link>
                </h2>
                <p>Date Modified: {this.props.modified}</p>  {/* format date here */}
                <button>Delete Note</button>
                <hr />
            </>
        );
    }
}
