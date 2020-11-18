import React, { Component } from 'react';

class DataArray extends Component {
    constructor() {
        super();

        this.state = {
            myArray: ['random', 'items', 'in', 'an', 'array'],
        };
    }
    render() {
        const randomItems = this.state.myArray.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
        });

        return <div>{randomItems}</div>;
    }
}

export default DataArray;
