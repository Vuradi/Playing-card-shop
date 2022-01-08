import React from 'react';
import './Footer.css';
import facebookLogo from '../../img/footer/facebook.svg';
import instaLogo from  '../../img/footer/instagram.svg';
import vkLogo from '../../img/footer/vk.svg';
import mailLogo from '../../img/footer/envelope.svg';
import MoonLogo from '../../img/footer/moon.svg';
import phoneLogo from '../../img/footer/phone.svg';
import {Link} from "react-router-dom";

function Footer() {
    return(
        <footer className={'footer page__footer'}>
            <section>
                <h3 className={'footer__title'}>Порекомендуй нас</h3>
                <ul type={'none'} className={'footer__lists'}>
                    <li><img className={'footer__icon'} src={facebookLogo}/>Facebook</li>
                    <li><img className={'footer__icon'} src={instaLogo}/>Instagram</li>
                    <li><img className={'footer__icon'} src={vkLogo}/>Вконтакте</li>
                </ul>
            </section>
            <section>
                <h3 className={'footer__title'}>Общая информация</h3>
                <ul type={'none'} className={'footer__lists'}>
                    <li><Link className={'footer__link'} to='/inprogress'>Акции</Link></li>
                    <li><Link className={'footer__link'} to='/reviews'>Отзывы</Link></li>
                    <li><Link className={'footer__link'} to='/inprogress'>Политика</Link></li>
                </ul>
            </section>
            <section>
                <h3 className={'footer__title'}>Личный кабинет</h3>
                <ul type={'none'} className={'footer__lists'}>
                    <li><Link className={'footer__link'} to='/inprogress'>Мой профиль</Link></li>
                    <li><Link className={'footer__link'} to='/inprogress'>Мои заказы</Link></li>
                    <li><Link className={'footer__link'} to='/inprogress'>Избранное</Link></li>
                </ul>
            </section>
            <section>
                <h3 className={'footer__title'}>Контактная информация</h3>
                <ul type={'none'} className={'footer__lists'}>
                    <li><img className={'contact-info__icon'} src={MoonLogo}/>123456, Кратер 10, Луна</li>
                    <li><img className={'contact-info__icon'} src={phoneLogo}/><a href={'tel:78910123456'} className={'phone-footer__number'}>+ 7-891-012-34-56</a></li>
                    <li><img className={'contact-info__icon'} src={mailLogo}/><a href={'mailto:fake@mail.com'} className={'phone-footer__number'}>fake@mail.com</a></li>
                </ul>
            </section>
        </footer>
    )
};

export default Footer;