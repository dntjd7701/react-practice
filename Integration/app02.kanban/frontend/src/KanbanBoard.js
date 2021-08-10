import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbanBoard.css';

export default function KanbanBoard(){
    const [cards, setCards] = useState([]);

    useEffect(async () => {
        try{
            const response = await fetch('/api/cards', {
                method:'get', 
                headers:{'Content-Type': 'application/json'}
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            setCards(json.data);{}

        }catch(e){
            console.error(e);
        }
    }, []); // mount 시점

    const notifyTask = {
        add: async function(cardNo, taskName){
            try {
                console.log('notify task add', cardNo, taskName);
                const url = `/api/card/${cardNo}/task`;
                const task = {
                    no: null,
                    name: taskName,
                    done: false,
                };
                const response = await fetch(url, {
                    method:'post', 
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify(task)
                });
    
                if(!response.ok){
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                const json = await response.json();

                if(json.result !== 'success'){
                    throw new Error(`${json.result} ${json.message}`);
                }

                console.log(json);
            } catch (error) {
                console.error(e);
            }
        },
        
        delete: function(){},
        change: function(){}
    };

    return (
        <div className={ styles.KanbanBoard }>
            <CardList key='Todo' notifyTask={ notifyTask } title= {'ToDo'} cards={cards.filter((card) => card.status=='ToDo')}/> 
            <CardList key='Doing' notifyTask={ notifyTask } title= {'Doing'} cards={cards.filter((card) => card.status=='Doing')}/> 
            <CardList key='Done' notifyTask={ notifyTask } title= {'Done'} cards={cards.filter((card) => card.status=='Done')}/> 
        </div>
    );
};  

