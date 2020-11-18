import React, { Component } from 'react';

class List extends Component {
    constructor() {
        super();

        this.state = {
            todos: [
                'code',
                'brush teeth',
                'grocery store',
                'walk dog',
                'moreCode',
            ],
            input: '',
        };
    }

    handleTodos(userInput) {
        console.log(userInput);
        this.setState({ input: userInput });
    }

    render() {
        let list = this.state.todos.filter(todo => {
            return todo.includes(this.state.input);
        });
        let displayList = list.map((item, index) => {
            return <h1 key={index}>{item}</h1>;
        });
        return (
            <div>
                <input
                    type='text'
                    onChange={e => this.handleTodos(e.target.value)}
                />
                {displayList}
            </div>
        );
    }
}

export default List;
