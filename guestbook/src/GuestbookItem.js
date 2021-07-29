import React, { Fragment } from 'react'

export default function GuestbookItem({name, message, regDate}){
    return (
        <li className="Guestbook__List__Item">
            <strong>{name}</strong>
            <p>{message && message.split('\n').map((line, index) => index > 0 ?
                <Fragment>
                    <br/>
                    { line }
                </Fragment> : line )}</p>
            <strong>{regDate}</strong>
            <a href=''>삭제</a>
        </li>
    )
}