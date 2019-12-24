import React, { Component } from 'react';
import './App.css';

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
                <p></p>
            </div>
        );
    }
}

export default App;