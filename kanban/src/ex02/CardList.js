import React from 'react';
import Card from './Card';
import styles from '../assets/css/CardList.css';

export default function CardList({ title, cards }){
    console.log(cards);
    return (
        <div className={ styles.CardList }>
            <h1>{ title }</h1>
            {cards.map(card => <Card
                                    key={card.no} 
                                    title={card.title} 
                                    description={card.description}
                                    status={ card.status }
                                    tasks={ card.tasks } />)}
        </div>
    );
};  

// cards의 갯수만큼 컴포넌트가 있어야 한다.
// map 활용
// 속성값으로 넘겨주기