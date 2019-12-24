import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        userInput: ''
    }

    inputChangeHandler = (e) => {
        this.setState({ userInput: e.target.value });
    }
    render() {
        const charList = this.state.userInput.split('').map(ch => {
            return <Char character={ch} />
        });

        return (
            <div>
                <h1>Hello, world!</h1>
                <input type='text'
                    onChange={this.inputChangeHandler}
                    value={this.state.userInput}>
                </input>
                <Validation inputLength={this.state.userInput.length} />
                {charList}
                <p></p>
            </div>
        );
    }
}

export default App;