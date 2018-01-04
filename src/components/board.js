import React from 'react';

import List from './list';
import AddForm from './add-form';

import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [
                {
                    title: 'Example list 1'
                },
                {
                    title: 'Example list 2'
                }
            ]
        };
    }
    render() {
        const lists = this.state.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List {...list} />
            </li>
        ));

        return (
            <div className="board">
                <h2>Example board</h2>
                <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <AddForm type="list" />
                    </li>
                </ul>
            </div>
        );
    }
}

Board.defaultProps = {
    title: 'Board'
};
