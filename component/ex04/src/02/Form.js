import React, { useState } from 'react';
import './assets/Form.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('female');
    const [bithYear, setbirthYear] = useState(1984);
    const [selfDescription, setSelfDescription] = useState('');
    const [agreeProv, setAgreeProv] = useState('no');


    const onChangeInputName = function(e) {
        // setName(e.target.value);
        // 10 자 제한(Validation)
        setName(e.target.value.substr(0,10));
    }
    const onChangeInputEmail =  function (e){
        setEmail(e.target.value);

        const re = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
        // Ajax
        // const result = await fetch('/user/emailcheck?email' + e.target.value);
        // setValidEmail(!result.data);
        setValidEmail(re.test(e.target.value));
    }
    const onChangeInputPassword = function(e){
        setPassword(e.target.value.substr(0,10));
    }

    const onChangeInputGender = function (e){
        setGender(e.target.value);
    }

    const onChangeInputProv = function (e){
    //    API 호출
        const url = `/prov/agree?status=${e.target.value === 'no' ? 'yes' : 'no'}`;
        console.log(url);
        if(true){
            setAgreeProv(e.target.value === 'no' ? 'yes' : 'no');
        }
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            {/* name */}
            <label htmlFor="name">이름</label>
            <input id="name" name="name" type="text" value={name} onChange={onChangeInputName}/>

            {/* email */}
            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" value={email} onChange={onChangeInputEmail}/>
            {/* etc */}
            {
                email === '' ? null :
                    validEmail ?
                        <FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: 5, color: 'blue'}} size='lg'/> :
                        <FontAwesomeIcon icon={faTimesCircle} style={{marginLeft: 5, color: 'red'}} size='lg'/>
            }

            {/* password */}
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={password} onChange={onChangeInputPassword}/>

            {/* gender, radio box */}
            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={"female"} checked={gender === 'female'} onChange={ onChangeInputGender }/>
                <label>남</label> <input type="radio" name="gender" value={"male"} checked={ gender === 'male'} onChange={ onChangeInputGender }/>
            </fieldset>

            {/* select/options */}
            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" name='birthYear' value={ bithYear } onChange={ e => setbirthYear(e.target.value) }>
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
            <textarea id='selfDescription' name='selfDescription' value={ selfDescription } onChange={ e => setSelfDescription(e.target.value.substr(0,50))}/>


            <fieldset>
                <legend>약관동의</legend>
                <input
                    id="agree-prov"
                    type="checkbox"
                    name="agreeProv"
                    value={ agreeProv }
                    checked={ agreeProv === 'yes'}
                    onChange={ onChangeInputProv }
                />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입"/>
        </form>
    );
}