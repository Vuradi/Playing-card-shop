import React from 'react';
import './Header.css';
import logo from '../../img/logo_svg.svg';
import {Link} from "react-router-dom";
import basket from '../../img/basket.svg';
import account from '../../img/no_register.svg';
import search from '../../img/search.svg';
import location from '../../img/header/location.svg';


function Header() {
    return (
        <header className={'header page__header'}>
            <section className={'header__top top-header'}>
                <div className={'top-header__container'}>
                    <div className={'top-header__menu'}>
                        <nav className={'menu__top'}>
                            <ul className={'menu__list'}>
                                <li className={'menu__item'}><Link className={'top-menu__link'} to={'/'}>Главная</Link></li>
                                <li className={'menu__item'}><Link className={'top-menu__link'} to={'/inprogress'}>Категории</Link></li>
                                <li className={'menu__item'}><Link className={'top-menu__link'} to={'/inprogress'}>Акции</Link></li>
                                <li className={'menu__item'}><Link className={'top-menu__link'} to={'/inprogress'}>О нас</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <Link to={'/registration'} className={'top-header__user'}>
                        <img className={'top-header__profile'} src={account}/>
                        Личный кабинет
                    </Link>
                </div>
            </section>
            <section className={'header__body body-header'}>
                 <div className={'body-header__container'}>
                     <Link to={'/'} className={'body-header_title'}>
                         <img className={'body-header__logo'} src={logo}/>
                         Магазин игральных карт
                     </Link>
                     <div className={'body-header__search'}>
                         <form action={'#'} className={'search-header'}>
                             <button type={'button'} className={'search-header__button'}>
                                <img className={'search-button'} src={search}/>
                            </button>
                             <input autoComplete={'off'} type={'text'} placeholder={'Поиск'} className={'search-header__input'}/>
                         </form>
                     </div>
                     <div className={'body-header__actions actions-header'}>
                         <div className={'actions-header__location'}>
                             <img className={'location-svg'} src={location}/>
                            Moon
                         </div>
                         <div className={'actions-header__phone phone-header'}>
                            <div className={'phone-header__items'}>
                                <a href={'tel:78910123456'} className={'phone-header__number'}>+ 7-891-012-34-56</a>
                                <button type={'button'} className={'phone-header__callback'}>Заказать звонок</button>
                            </div>
                         </div>
                         <div className={'actions-header__basket basket-header'}>
                             <div className={'basket-header__icon'}>
                                 <img className={'icon-basket'} src={basket}/>
                                 <div className={'number-orders'}>0</div>
                             </div>
                            <div className="basket-header__body">
                                <span className="basket-header__summ">0 р.</span>
                                <p className="basket-header__link">Оформить заказ</p>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header;