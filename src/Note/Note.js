import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Note extends Component {
    render() {
        return (
            <>
                <h2 className="note">
                <Link to={`/notes/${this.props.id}`}>
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
