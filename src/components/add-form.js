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
            return (
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#">Add a {this.props.type}...</a>
                </div>
            );
        }

        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                <input type="text" value={this.state.text}
                    onChange={e => this.setText(e.target.value)} />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
