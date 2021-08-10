import React from 'react';
import Card from './Card';
import styles from './assets/css/CardList.css';
import { PropTypes } from 'prop-types';

// cards의 갯수만큼 컴포넌트가 있어야 한다.
// map 활용
// 속성값으로 넘겨주기

export default function CardList({ title, cards, notifyTask }){
    return (
        <div className={ styles.CardList }>
            <h1>{ title }</h1>
            {cards.map(card => <Card
                key={card.no}
                cardNo={card.no}
                title={card.title}
                description={card.description}
                status={ card.status }
                tasks={ card.tasks }
                notifyTask={ notifyTask } />)}
        </div>
    );
};
CardList.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)
}
