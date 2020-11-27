import React, { Component } from 'react';
import './App.css';
// import Image from './component/Image';

function Image(props) {
    return (
        <div>
            <img src={props.url} alt='' />
        </div>
    );
}
function App() {
    return (
        <div className='App'>
            <Image
                url={
                    'https://images.unsplash.com/photo-1606214963494-3e0a8b97ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
                }
            />
        </div>
    );
}

export default App;
