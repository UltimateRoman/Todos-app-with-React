import React, { Component } from 'react';

export class Addtodo extends Component {
    state = {
        title: ''
    }

    onInput = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" name="title" style={{flex: '10', padding: '5px'}} 
                placeholder="Todo name" value={this.state.title} onChange={this.onInput} />
                <input type="submit" value="Submit" className="btn" style={{flex: '2'}}/>
            </form>
        );
    }
}

export default Addtodo;