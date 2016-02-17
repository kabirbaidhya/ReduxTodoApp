import React from 'react';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            text: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        var text = this.state.text.trim();

        if (text.length === 0 ) {
            return;
        }

        this.props.handleSave(text);
        this.setState({text:''});
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        console.log('props todos = ', this.props.todos);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input  type="text"
                            placeholder="What do you want to do?"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.text} />
                    <button type="submit">Add</button>
                </form>
                <ul className="todo-list">
                    {this.props.todos.map((item, index) =>
                        <li key={index}>{item.get('text')}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
