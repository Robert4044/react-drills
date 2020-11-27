import React, { Component } from 'react';
import './App.css';
// import Login from './components/Login';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };
    }
    handleUser = e => {
        console.log(e.target.value);
        this.setState({ username: e.target.value });
    };
    handlePassword = e => {
        console.log(e.target.value);
        this.setState({ password: e.target.value });
    };
    handleClick = () => {
        alert(
            `Username: ${this.state.username} Password: ${this.state.password}`
        );
    };
    render() {
        return (
            <div>
                <input onChange={this.handleUser} type='text' />
                <input onChange={this.handlePassword} type='text' />
                <button onClick={this.handleClick}>Login</button>
            </div>
        );
    }
}

function App() {
    return (
        <div className='App'>
            <Login />
        </div>
    );
}

export default App;
