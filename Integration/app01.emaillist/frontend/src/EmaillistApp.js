import React, {useEffect, useState} from 'react';
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";


export default function EmaillistApp(){
    console.log('rendering..... Emaillist...');
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');


    useEffect(async () => {
        try{
            const response = await fetch('/api', {
                method: 'get',
                mode: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null
           });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails(json.data);
        } catch(e){
            console.error(e);
        }
    }, []);

    // 변화 시키는 쪽이 자식에 있음. 그니까 자식에게 콜백함수 전달.

    // callback func
    const notifyKeywordChanged = function(keyword){
        setKeyword(keyword);
    }

    return(
        <div className={ 'EmaillistApp' }>
            <Searchbar keyword={ keyword } callback={ notifyKeywordChanged }/>
            <Emaillist keyword={ keyword } emails={ emails }/>
        </div>
    )
}