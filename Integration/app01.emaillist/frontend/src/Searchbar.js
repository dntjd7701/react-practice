import React,{useState} from 'react';
import PropTypes from 'prop-types';


export default function Searchbar({ callback, keyword }) {
    console.log('rendering..... SearchBar...');
    //const [keyword, setKeyword] = useState('');

    // 구문 상으로 보기에는 초기화 시키는 것처럼 보이지만, 초기값을 설정하고 상태를 유지한다.
    // 상태를 부모쪽으로 옮겨보자.
    // const [keyword, setKeyword] = useState('');

    const handleChange = function(e){
        callback(e.target.value);
        //setKeyword(e.target.value);
    }

    return (
        <div className={ 'Searchbar' }>
            찾기: <input type='text' onChange={ handleChange } placeholder='search' value={ keyword }/>
        </div>
    )
}
Searchbar.propTypes = {
    callback: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired
}
