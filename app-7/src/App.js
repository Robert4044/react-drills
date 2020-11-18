import React, { Component } from 'react';
import './App.css';
import List from './component/List';
import NewTask from './component/NewTask';

class App extends Component {
    constructor() {
        super();

        this.state = {
            task: [],
        };
        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask(task) {
        this.setState({ task: [...this.state.task, task] }); //spread adds an element while preserving existing array
    }

    render() {
        return (
            <div className='App'>
                <h1>My to-do List:</h1>
                <NewTask add={this.handleAddTask} />
                <List tasks={this.state.task} />
            </div>
        );
    }
}
// App passes add to NewTask as props
// App passes tasks to List as props

export default App;
