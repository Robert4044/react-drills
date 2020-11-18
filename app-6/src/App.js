import React, { Component } from 'react';
import Todo from './component/Todo';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            task: [],
            input: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleTaskAdd = this.handleTaskAdd.bind(this);
    }

    handleInput(e) {
        console.log(e.target.value);
        this.setState({
            input: e.target.value,
        });
    }
    handleTaskAdd() {
        // let input = this.state.input;
        // let task = this.state.task;
        // task.push(input);
        // this.setState({
        //     task: task,
        // });
        this.setState({
            task: [...this.state.task, this.state.input],
        });
    }

    render() {
        let tasks = this.state.task.map((elem, index) => {
            return <Todo key={index} task={elem} />;
        });
        return (
            <div className='App'>
                <h1>My to-do list:</h1>

                <input type='text' onChange={this.handleInput} />
                <button onClick={this.handleTaskAdd}>Add</button>
                <br />
                {tasks}
            </div>
        );
    }
}

export default App;
