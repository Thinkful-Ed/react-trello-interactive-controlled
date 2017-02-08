import React from 'react';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
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
            <form className="card add-form">
                <input type="text" />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
