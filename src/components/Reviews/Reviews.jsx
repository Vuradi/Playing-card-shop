import React from 'react';
import './Reviews.css';
import {Async} from "react-async";

const loadWizard = () =>

    fetch('http://hp-api.herokuapp.com/api/characters/students')
        .then(res => (res.ok? res : Promise.reject(res)))
        .then(res => res.json())



function Reviews() {

        return (
                <div>
                    <Async promiseFn={loadWizard}>
                        {({data, err, isLoading}) => {
                            if (isLoading) return 'Loading ...'
                            if (err) return  `Something went wrong: ${err.message}`

                            if (data)
                                return (
                                    <div>
                                        <h2 className={'main__tittle-review'}>Отзывы</h2>
                                        <section className={'main__cards-review'}>
                                            <section className={'main-card-wizard'}>
                                                <img className={'wizard-image'} src={data[0].image}/>
                                                <div className={'card-wizard__description'}>
                                                    <h2 className={'wizard-name'}>{data[0].name}</h2>
                                                    <p>Карты пришли в целости исохранности спасибо!</p>
                                                </div>
                                            </section>
                                            <section className={'main-card-wizard'}>
                                                <img src={data[1].image}/>
                                                <div className={'card-wizard__description'}>
                                                <h2 className={'wizard-name'}>{data[1].name}</h2>
                                                <p>Ожидания оправдались!</p>
                                                </div>
                                            </section>
                                            <section className={'main-card-wizard'}>
                                                <img src={data[2].image}/>
                                                <div className={'card-wizard__description'}>
                                                <h2 className={'wizard-name'}>{data[2].name}</h2>
                                                <p>Заказал здесь по совету Harry и не прогадал.</p>
                                                </div>
                                            </section>
                                            <section className={'main-card-wizard'}>
                                                <img src={data[6].image}/>
                                                <div className={'card-wizard__description'}>
                                                <h2 className={'wizard-name'}>{data[6].name}</h2>
                                                <p>Теперь смогу делать реальную магию.</p>
                                                </div>
                                            </section>
                                        </section>
                                    </div>
                                )
                        }}
                    </Async>
                </div>
            );
}

export default Reviews;