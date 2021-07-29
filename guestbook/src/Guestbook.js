import React from 'react'
import GuestbookAddForm from './GuestbookAddForm';
import GuestbookList from './GuestbookList';
import styles from './assets/scss/Guestbook.scss';


export default function Guestbook(){
    return (
        <div className={ styles.Guestbook }>
            <GuestbookAddForm />
            <GuestbookList />
        </div>
    )
}