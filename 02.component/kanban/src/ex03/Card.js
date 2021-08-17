import React, { useState } from 'react';
import TaskList from './TaskList';
import styles from '../assets/scss/Card.scss';

export default function Card({ title, description, status, tasks }){
    const [showDetails, setShowDetails]  = useState(false);
    const styleSideColor={
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        width:3,
        backgroundColor: status === 'ToDo' ? 'purple' : status === 'Doing' ? 'deeppink' : "skyblue"
    }
    return (
        <div className= { styles.Card } >
            <div style= { styleSideColor } />
                <div
                    className=
                    { showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title }
                    onClick={ () => { setShowDetails(!showDetails )} } > { title }
                </div>
            {
                showDetails ?
                    <div className={styles.Card__Details}> {description} <TaskList tasks={ tasks }/>
                    </div>
                    : null
            }
        </div>
    );
};  

// JSX에서는 스네이크 표기법을 사용하여 하나의 컴포넌트를 명확히 명시하는 것이 좋다.