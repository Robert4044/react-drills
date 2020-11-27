import React, { Component } from 'react';

class DataArr extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                'carrots',
                'peas',
                'pear',
                'apple',
                'vinegar',
                'baking soda',
            ],
        };
    }
    render() {
        const mappedData = this.state.data.map((elem, index) => {
            return (
                <h2>
                    {index + 1}: {elem}
                </h2>
            );
        });
        return <div>{mappedData}</div>;
    }
}

export default DataArr;
