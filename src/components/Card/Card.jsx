import React from 'react';
import Cards from '../../json/cards.json';
import {useParams} from "react-router-dom";
import './Card.css';


function Card() {
    const {title} = useParams();
    const card = Cards.filter(card => card.title === title)

    return (
        <>
            {Cards && (
                <section className={'buy-card'}>
                    <img className={'main__picture-card'} src={card[0].image}/>
                    <div className={'card-description'}>
                        <h2 className={'main__card-name'}>{title}</h2>
                        <p>{card[0].description}</p>
                        <p className={'card-price'}>{card[0].price}</p>
                        <button type={'button'} className={'btn-buy-card'}>Купить</button>
                    </div>
                </section>
            )}
        </>
    )
}

export default Card;