import React, { Component } from 'react';

class Listy extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
            list: [
                'carrots',
                'peas',
                'pear',
                'apple',
                'vinegar',
                'baking soda',
                'vines',
                'barking dog',
                'arizona',
            ],
        };
    }

    filterChange = e => {
        const input = e.target.value;
        console.log(input);
        this.setState({ input: input });
    };

    render() {
        let list = this.state.list.filter(item => {
            return item.includes(this.state.input);
        });
        const mappedList = list.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
        });

        return (
            <div>
                <input onChange={this.filterChange} type='text' />
                {mappedList}
            </div>
        );
    }
}

export default Listy;
