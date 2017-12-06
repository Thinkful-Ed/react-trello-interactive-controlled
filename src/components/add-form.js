import React from 'react';

import './add-form.css';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: ''
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.state.text;
        console.log(text);
        // TODO: Add the card or list
        this.setState({
            text: ''
        });
    }

    setText(text) {
        this.setState({
            text
        })
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            const text = `Add a ${this.props.type}`;
            return (
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#">{text}...</a>
                </div>
            );
        }
        const label = `Enter a ${this.props.type}`;
        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                <input type="text" 
                    value={this.state.text}
                    onChange={e => this.setText(e.target.value)}
                    aria-label={label}
                />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}