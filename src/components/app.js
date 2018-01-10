import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        this.props.loginUser();
    }

    render() {
        return (
            <div>
                React starter
            </div>
        )
    }
}

export default App;