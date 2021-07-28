import React from 'react';
import Card from './Card';

export default function CardList({ title, cards }){
    console.log(cards);
    return (
        <div className={'CardList'}>
            <h1>{ title }</h1>
            {cards.map(card => <Card
                                    key={card.no} 
                                    title={card.title} 
                                    description={card.description}
                                    tasks={ cards.tasks } />)}
        </div>
    );
};  

// cards의 갯수만큼 컴포넌트가 있어야 한다.
// map 활용
// 속성값으로 넘겨주기