import React from 'react';

import './add-form.css';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        console.log(text);
        // TODO: Add the card or list
        this.textInput.value = '';
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
                <input
                    type="text"
                    ref={input => this.textInput = input}
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
