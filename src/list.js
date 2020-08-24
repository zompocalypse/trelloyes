import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    const arrayList = prop.cards.map(card =>
        <Card key={card.id}
            title={card.title}
            content={card.content}/>
    );
    return (
        <section className="List">
            <header className="List-cards">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {arrayList}
                <button type="button" class="List-add-button">
                    + Add Random Card
          </button>
            </div>
        </section>
    );
};

