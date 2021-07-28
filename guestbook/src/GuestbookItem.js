import React from 'react'

export default function GuestbookItem({name, message, regDate}){
    return (
        <li className="Guestbook__List__Item">
            <strong>{name}</strong>
            <p>{message}</p>
            <strong>{regDate}</strong>
            <a href=''>삭제</a>
        </li>
    )
}