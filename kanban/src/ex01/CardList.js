import React from 'react';
// import Card from './Card';

export default function CardList({ title, cards }){
    console.log(cards);
    return (
        <div className={'CardList'}>
            <h1>{ title }</h1>
            {/* <Card />
            <Card />
            <Card /> */}
        </div>
    );
};  


// 데이터 통신을 할 때에, 형제끼리의 데이터 통신은 불가하다
// 그러므로 부모를 통해 데이터를 부모에게 전송하고 부모가 형제에게 전달하는 식으로 간접적으로
// 데이터 통신을 이루어낼 수 있다.