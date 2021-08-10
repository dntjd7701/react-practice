import React from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';
import { PropTypes } from 'prop-types';


export default function TaskList({cardNo, tasks, notifyTask }){
    return (
        <div className='TaskList'>
            <ul>
                { tasks.map(task => <Task key={ task.no } name={ task.name }/> )}
            </ul>
            <input 
                className={styles.TaskList_input_add_task} 
                type='text' 
                placeholder={ 'Adding Task' } 
                onKeyPress= { (e) => {
                    if(e.key === 'Enter'){
                        notifyTask.add(cardNo, e.target.value);
                        e.target.value = '';
                    }
                }}
                />
        </div>
    );
};

TaskList.TaskList = {
    tasks : PropTypes.arrayOf(PropTypes.object).isRequired
}
