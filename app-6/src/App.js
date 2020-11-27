import React, { Component } from 'react';
import PracticeTodo from './component/PracticeTodo';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            input: '',
        };
    }

    handleAddTask = e => {
        console.log(e.target.value);
        this.setState({
            input: e.target.value,
        });
    };

    handleClick = input => {
        this.setState({
            tasks: [...this.state.tasks, input],
        });
    };

    render() {
        console.log(this.state.tasks);
        return (
            <div>
                <h1>My to-do List:</h1>
                <input onChange={this.handleAddTask} type='text' />
                <button onClick={() => this.handleClick(this.state.input)}>
                    add
                </button>
                <PracticeTodo tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;
