import React from 'react'
import GuestbookItem from './GuestbookItem';
import boards from './assets/json/data.json';
import styles from './assets/scss/GuestbookList.scss';

export default function GuestbookList(){
    return (
        <ul className={ styles.GuestbookList }>
            {boards.map(board => <GuestbookItem key={board.no} name={board.name} message={board.message} regDate={board.regDate}/>)}
        </ul>
    )
}