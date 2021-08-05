import React, { useState }  from 'react';
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";
import data from './assets/json/data.json';


export default function EmaillistApp(){
    console.log('rendering..... Emaillist...');
    const [emails] = useState(data);
    const [keyword, setKeyword] = useState('');

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