import React from 'react';

import Card from './card';
import AddForm from './add-form';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{
                text: 'Example card 1'
            }, {
                text: 'Example card 2'
            }, {
                text: 'Example card 3'
            }]
        }
    }

    render() {
        const cards = this.state.cards.map((card, index) =>
            <li key={index}>
                <Card {...card} />
            </li>
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {cards}
                    <li>
                        <AddForm type="card" />
                    </li>
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};