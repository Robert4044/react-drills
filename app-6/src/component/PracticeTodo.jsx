import React from 'react';

function PracticeTodo({ tasks }) {
    const mappedTasks = tasks.map((task, index) => {
        return <h1 key={index}>{task}</h1>;
    });
    return <div>{mappedTasks}</div>;
}

export default PracticeTodo;
