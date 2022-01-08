import React, {useEffect} from 'react';
import './IndexPage.css';
import mainImg from '../../img/header.jpg';
import Cards from '../../json/cards.json';
import {Link} from "react-router-dom";



function IndexPage() {

    return(
        <div className={'content'}>
            <img className={'main__photo'} src={mainImg}/>
            <h2 className={'main__title'}>Самые покупаемые колоды</h2>
            <div className={'main__card-list'}>
                {
                    Cards.map(card => (
                        <div className={'main__card'}  key={card.id}>
                            <Link className={'main__card-link'} key={card.id} to={`${card.title}`}>
                            <h3 className={'main__card-title'}>{card.title}</h3>
                            <img className={'main__img'} src={card.image}/>
                            <p className={'main__card-description'}>{card.description}</p>
                            <p className={'main__card-price'}>{card.price}</p>
                            <button className={'main__button-buy'}>Купить</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default IndexPage;