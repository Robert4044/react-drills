import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
        // this.handleAlert = this.handleAlert.bind(this);
    }

    handleUserName(val) {
        console.log(val);
        this.setState({
            username: val,
        });
    }
    handlePassword(val) {
        console.log(val);
        this.setState({
            password: val,
        });
    }

    handleAlert(val1, val2) {
        alert(`Username: ${val1} Password: ${val2}`);
        // alert(
        //     `Username: ${this.state.username} Password: ${this.state.password}`
        // );
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='username'
                    onChange={e => this.handleUserName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='password'
                    onChange={e => this.handlePassword(e.target.value)}
                />
                <button
                    onClick={() =>
                        this.handleAlert(
                            this.state.username,
                            this.state.password
                        )
                    }>
                    Login
                </button>
                {/* <button onClick={this.handleAlert}>Login</button> */}
            </div>
        );
    }
}

export default Login;
