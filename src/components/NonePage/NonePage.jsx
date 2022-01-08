import React from 'react';
import notFound from '../../img/notFound.jpg';
import './NonePage.css';


function NonePage() {
    return (
        <div className={'main__not-found'}>
            <h2 className={'title-notfound'}>Страница не найдена</h2>
            <img src={notFound}/>
        </div>
    )
}

export default NonePage;