import React, { Component } from 'react';

class TextBox extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        };
    }

    handleInput(userInput) {
        console.log(userInput);
        this.setState({
            input: userInput,
        });
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    onChange={e => this.handleInput(e.target.value)}
                />
                <h4>{this.state.input}</h4>
            </div>
        );
    }
}

export default TextBox;
