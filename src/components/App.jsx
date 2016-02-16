import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Value: {this.props.value}</h1>
                
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        );
    }
}

export default App;
