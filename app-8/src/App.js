import React, { Component } from 'react';
import './App.css';

import Starwars from './Component/Starwars';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            singleStarwars: {},
            starwarsId: 1,
        };

        this.getSingleStarwars = this.getSingleStarwars.bind(this);
        this.handleStarwarsIdChange = this.handleStarwarsIdChange.bind(this);
    }

    getSingleStarwars(e) {
        e.preventDefault();

        axios
            .get(`https://swapi.dev/api/people/${this.state.starwarsId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    singleStarwars: res.data,
                });
            })
            .catch(e => {
                alert('Starwars Character does not exist!');
            });
    }

    handleStarwarsIdChange(e) {
        this.setState({
            starwarsId: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <header>
                    <form onSubmit={this.getSingleStarwars}>
                        <h2 className='header-text'>
                            Find a specific Starwars Character
                        </h2>
                        <div className='input-container'>
                            <input
                                onChange={this.handleStarwarsIdChange}
                                placeholder='Starwars Number'
                            />
                            <button className='btn'>Search</button>
                        </div>
                    </form>
                </header>

                <div className='content'>
                    <Starwars starwars={this.state.singleStarwars} />
                </div>
            </div>
        );
    }
}
export default App;
