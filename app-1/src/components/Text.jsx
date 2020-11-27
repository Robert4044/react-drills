import React, { Component } from 'react';

class Text extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
        };
    }

    handleChange = e => {
        this.setState({ input: e.target.value });
    };
    render() {
        return (
            <div>
                <input onChange={this.handleChange}></input>
                <p>{this.state.input}</p>
            </div>
        );
    }
}

export default Text;
