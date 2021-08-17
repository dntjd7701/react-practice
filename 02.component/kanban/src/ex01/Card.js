import React from 'react';
import TaskList from './TaskList';

export default function Card({ title, description, tasks }){
    return (
        <div className='Card'>
            <div className='Card__Title'>{ title }</div>
            <div className='Card__Details'>
                { description }
                <TaskList tasks={ tasks } />
            </div>
        </div>
    );
};  

// JSX에서는 스네이크 표기법을 사용하여 하나의 컴포넌트를 명확히 명시하는 것이 좋다.