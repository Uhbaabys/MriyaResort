import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Header.scss';
import './Menu.scss';
import './Header_360.scss';
import './Menu_360.scss';
import img_close from './img/close.svg'
import img_facebook from './img/facebook.svg'
import img_insta from './img/instagram.svg'
import img_twitter from './img/twitter.svg'
import img_slide from './img/photo.png'
import img_key from './img/360/key.svg'
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from "../Button/Button";

const Header = () => {

    function burgerClick() {
        let burgerButton = document.querySelector('.burger'),
            menu = document.querySelector('.header-menu');

        function showMenu() {
            menu.classList.remove('hide');
            menu.classList.add('show');
        }

        showMenu();
    }

    function closeClick() {
        let menu = document.querySelector('.header-menu'),
            closeButton = document.querySelector('.close-menu');

        function hideMenu() {
            menu.classList.remove('show');
            menu.classList.add('hide');
        }

        hideMenu();
    }

    function showService(event) {
        const serviceName = document.querySelectorAll('.service-name'),
            service = document.querySelectorAll('.service'),
            tag = event.target.getAttribute('name');

        console.log(event.target.getAttribute('name'))

        service.forEach(item=>{
            item.classList.add('hide');
            if(item.classList.contains(tag)){
                item.classList.remove('hide')
                item.classList.add('show');
            }else{
                item.classList.remove('show');
            }
        })
    }

    return (
        <header className={'header'}>
            <div className={'header-container'}>
                <div className={'burger'} onClick={burgerClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={'nav nav-left'}>
                    <a href="">?? ??????????????????</a>
                    <a href="">????????</a>
                    <a href="">FAQ</a>
                    <a href="">????????????????</a>
                </nav>
                <div className={'header-logo'}></div>
                <div className={'sign-in-360'}><img src={img_key} alt=""/></div>
                <nav className={'nav nav-right'}>
                    <div className={'lang'}>
                        <a href="">RU</a>
                        <a href="">ENG</a>
                    </div>
                    <div className={'account'}>
                        <a href="" className={'sign-in'}>????????</a>
                        <a href="" className={'phone'}>8 800 500 6847</a>
                    </div>
                </nav>
            </div>
            <div className={'header-menu hide'}>
                <div className={'header-menu-container'}>
                    <div className={'header-menu-nav'}>
                        <div className={'header-menu-nav-buttons'}>
                            <a href="">?? ??????????????????</a>
                            <a href="">????????</a>
                            <a href="">FAQ</a>
                            <a href="">????????????????</a>
                        </div>
                        <div className={'header-menu-nav-sign_in'}>
                            <a href="">????????</a>
                        </div>
                    </div>
                    <div className={'header-menu-content'}>
                        <div className={'header-menu-content-social'}>
                            <ul>
                                <li><img src={img_facebook} alt=""/></li>
                                <li><img src={img_twitter} alt=""/></li>
                                <li><img src={img_insta} alt=""/></li>
                            </ul>
                        </div>
                        <div className={'header-menu-content-type-services'}>
                            <ul>
                                <li className={'service-name'} name='placement' onMouseOver={showService}>????????????????????
                                </li>
                                <li className={'service-name'} name='medicine' onMouseOver={showService}>????????????????</li>
                                <li className={'service-name'} name='events' onMouseOver={showService}>??????????????????????</li>
                                <li className={'service-name'} name='beauty' onMouseOver={showService}>?????????????? ??
                                    ????????????????????????????
                                </li>
                                <li className={'service-name'} name='bar' onMouseOver={showService}>???????? ?? ??????????????????
                                </li>
                                <li className={'service-name'} name='entertainment'
                                    onMouseOver={showService}>??????????????????????
                                </li>
                                <li className={'service-name'} name='sport' onMouseOver={showService}>??????????</li>
                                <li className={'service-name'} name='child' onMouseOver={showService}>??????????</li>
                                <li className={'service-name'} name='transport' onMouseOver={showService}>??????????????????</li>
                            </ul>
                        </div>
                        <div className={'header-menu-content-services'}>
                            <div className={'service placement show'}>
                                <ul>
                                    <li>?????????????? ?????????? "????????????????????"</li>
                                </ul>
                                </div>
                            <div className={'service medicine hide'}>
                                <ul>
                                    <li>?????????????? ?????????????????????????????????????? ????????????????</li>
                                    <li>?????????????????????? ??????????</li>
                                </ul>
                                <div>
                                    <p>?????????????????????????? ?????????????????? ?????????????? ?? ?????????????????????? ???????????????? ?? ?????????????????? ?? ????????????????????????????
                                        ???????????????? ?? ?????????????????????? ?? ?????????? ???? ???????????? ???????????????? ???????????????? ???????? Mriya Resort & SPA
                                        5* </p>
                                </div>
                            </div>
                            <div className={'service events hide'}>
                                <ul>
                                    <li>?????????????? ?????????? "??????????????????????"</li>
                                </ul>
                            </div>
                            <div className={'service beauty hide'}>
                                <ul>
                                    <li>?????????????? ?????????? "?????????????? ?? ????????????????????????????"</li>
                                </ul>
                            </div>
                            <div className={'service bar hide'}>
                                <ul>
                                    <li>?????????????? ?????????? "???????? ?? ??????????????????"</li>
                                </ul>
                            </div>
                            <div className={'service entertainment hide'}>
                                <ul>
                                    <li>?????????????? ?????????? "??????????????????????"</li>
                                </ul>
                            </div>
                            <div className={'service sport hide'}>
                                <ul>
                                    <li>?????????????? ?????????? "??????????"</li>
                                </ul>
                            </div>
                            <div className={'service child hide'}>
                                <ul>
                                    <li>?????????????? ?????????? "??????????"</li>
                                </ul>
                            </div>
                            <div className={'service transport hide'}>
                                <ul>
                                    <li>?????????????? ?????????? "??????????????????"</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'header-menu-content-slider'}>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    dynamicBullets: true,
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                            >
                                <SwiperSlide><img src={img_slide} alt=""/></SwiperSlide>
                                <SwiperSlide><img src={img_slide} alt=""/></SwiperSlide>
                                <SwiperSlide><img src={img_slide} alt=""/></SwiperSlide>
                            </Swiper>
                            <div className={'swiper-pagination'}></div>
                            <div className={'slider-info'}>
                                <div>
                                    <h2>??????????????????????</h2>
                                    <p>10-21 ??????</p>
                                    <Button style = 'gold slider-button' text = '??????????????????'/>
                                </div>
                            </div>
                        </div>
                        <div className={'header-menu-footer'}>
                            <p>info@mriyaresort.com</p>
                        </div>
                    </div>

                </div>
                <div className={'close-menu'} onClick={closeClick}>
                    <img src={img_close} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;