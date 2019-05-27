import React, { Component } from 'react';

export default class Note extends Component {
    render() {
        return (
            <>
                <h2 className="note">Note Title</h2>
                <p>Note content stuff goes here</p>
                <button>Delete Note</button>
                <p>Content Details (if clicked)</p>
            </>
        );
    }
}
