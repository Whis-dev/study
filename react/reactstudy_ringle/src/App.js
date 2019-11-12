import React from 'react';
import './App.css';
import SignIn from './sign/SignIn';
import SignUp from './sign/SignUp';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SignIn/>
                <SignUp/>
            </header>
        </div>
    )
}

export default App;