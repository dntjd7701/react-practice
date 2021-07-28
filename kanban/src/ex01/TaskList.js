import React from 'react';
import Task from './Task';

export default function TaskList({ tasks }){
    return (
        <div className='TaskList'>
            <ul>
                { tasks.map((task) => <Task key={ task.no } name={ task.name }/> )}
            </ul>
        </div>
    );
};  
// key 값은 속성에 넣어야된다. element내에 작성 ㄴㄴ
// error 와이 ?
