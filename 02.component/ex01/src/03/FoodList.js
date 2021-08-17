import React from 'react';
import ListItem from './ListItem';
// property를 객체로 넘겨서 받음.
// 객체 분해를 사용할 수 있음.
export default function FoodList({ foods }){
        return (
            <ul>
                { foods.map((food) => 
                        <ListItem 
                                key={food.no} 
                                name={food.name}
                                quantity={food.quantity}/>)}
            </ul>
        );
};  