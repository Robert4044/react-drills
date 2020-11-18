import React from 'react';
import './App.css';
import Image from './component/Image';
function App() {
    return (
        <div className='App'>
            <Image
                url={
                    'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80'
                }
            />
        </div>
    );
}

export default App;
