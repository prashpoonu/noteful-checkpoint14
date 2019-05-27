import React, { Component } from 'react';

export default class Note extends Component {
    render() {
        return (
            <>
                <h2 className="note">{this.props.name}</h2>
                <p>Date Modified: {this.props.modified}</p>  {/* format date here */}

                {/* <p>Content Details (if clicked)</p> */}
                <button>Delete Note</button>
                <hr />
            </>
        );
    }
}
