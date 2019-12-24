import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {
    state = {
        userInput: ''
    }

    inputChangeHandler = (e) => {
        this.setState({ userInput: e.target.value });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <input type='text'
                    onChange={this.inputChangeHandler}
                    value={this.state.userInput}>
                </input>
                <Validation inputLength={this.state.userInput.length} />
                <p></p>
            </div>
        );
    }
}

export default App;