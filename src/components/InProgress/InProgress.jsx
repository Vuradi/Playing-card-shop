import React from 'react';
import WebWorks from '../../img/works.jpg';
import  './InProgress.css';

function InProgress() {
    return (
        <div className={'main-inprogress'}>
            <h2 className={'title-inprogress'}>Мы стараемся как можем!</h2>
            <img src={WebWorks}/>
        </div>
    )
}

export default InProgress;