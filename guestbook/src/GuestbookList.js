import React from 'react'
import GuestbookItem from './GuestbookItem';
import boards from './data.json';

export default function GuestbookList(){
    return (
        <ul className="Guestbook__List">
            {boards.map(board => <GuestbookItem key={board.no} name={board.name} message={board.message} regDate={board.regDate}/>)}
        </ul>
    )
}