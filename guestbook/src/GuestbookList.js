import React from 'react'
import GuestbookItem from './GuestbookItem';
import boards from './assets/json/data.json';
import styles from './assets/scss/GuestbookList.scss';

export default function GuestbookList(){
    console.log(boards);
    return (
        <ul className={ styles.GuestbookList }>
            { boards.map(board => <GuestbookItem key={`guestbook_list_item_${board.no}`} no = {board.no} name={board.name} message={board.message} regDate={board.regDate}/>) }
        </ul>
    )
}