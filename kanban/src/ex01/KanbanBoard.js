import React, { Fragment } from 'react';
import CardList from './CardList';
import cards from './data.json';


export default function KanbanBoard(){
    console.log(cards);
    return (
        <div className={'KanbanBoard'}>
            <CardList key='Todo' title= {'ToDo'} cards={cards.filter((card) => card.status=='ToDo')}/> 
            <CardList key='Doing' title= {'Doing'} cards={cards.filter((card) => card.status=='Doing')}/> 
            <CardList key='Done' title= {'Done'} cards={cards.filter((card) => card.status=='Done')}/> 
        </div>
    );
};  

