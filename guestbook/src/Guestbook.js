import React from 'react'
import GuestbookAddForm from './GuestbookAddForm';
import GuestbookList from './GuestbookList';


export default function Guestbook(){
    return (
        <div className="Guestbook">
            <GuestbookAddForm />
            <GuestbookList />
        </div>
    )
}