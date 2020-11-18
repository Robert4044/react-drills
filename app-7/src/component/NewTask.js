import React, { Component } from 'react';

class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleInputChange(e) {
        this.setState({ input: e.target.value });
    }
    handleAdd() {
        this.props.add(this.state.input); // props coming from "add" in App.js
        this.setState({ input: '' });
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='New Task'
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default NewTask;
