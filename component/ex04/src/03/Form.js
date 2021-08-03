import React, { useState } from 'react';
import './assets/Form.css';
import * as Console from "console";

export default function Form() {
    function onSubmit(e){
        e.preventDefault();
        console.log(e.target.email.value, );

    }

    return (
        <form id="loginForm" name="joinForm" method="post" action="" onSubmit={ onSubmit }>
            {/* name */}
            <label htmlFor="name">이름</label>
            <input id="name" name="name" type="text"/>

            {/* email */}
            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text"/>
            {/* etc */}

            {/* password */}
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password"/>

            {/* gender, radio box */}
            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender"/>
                <label>남</label> <input type="radio" name="gender"/>
            </fieldset>

            {/* select/options */}
            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" name='birthYear'>
                <option value={ 1984 }>1984년</option>
                <option value={ 1985 }>1985년</option>
                <option value={ 1986 }>1986년</option>
                <option value={ 1987 }>1987년</option>
                <option value={ 1988 }>1988년</option>
                <option value={ 1989 }>1989년</option>
                <option value={ 1990 }>1990년</option>
            </select>

            {/* textarea */}
            <label htmlFor="birthYear">자기소개</label>
            <textarea id='selfDescription' name='selfDescription'/>


            <fieldset>
                <legend>약관동의</legend>
                <input
                    id="agree-prov"
                    type="checkbox"
                    name="agreeProv"
                />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="login"/>
        </form>
    );
}