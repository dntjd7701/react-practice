import React from 'react';
import Task from './Task';
import { PropTypes } from 'prop-types';



export default function TaskList({ tasks }){
    return (
        <div className='TaskList'>
            <ul>
                { tasks.map(task => <Task key={ task.no } name={ task.name }/> )}
            </ul>
        </div>
    );
};

TaskList.TaskList = {
    tasks : PropTypes.arrayOf(PropTypes.object).isRequired
}
