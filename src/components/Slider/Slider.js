import React from "react";
import './Slider.scss';
import './Slider_360.scss';

import img_1_1 from './img/1-1.png'
import img_1_2 from './img/1-2.png'
import img_2_1 from './img/2-1.png'
import img_2_2 from './img/2-2.png'
import img_2_3 from './img/2-3.png'
import img_prev from "./img/prev.svg";
import img_next from "./img/next.svg";

const Slider = ()=>{

    function handleClick(){
        let tabNav = document.querySelectorAll('.slider-tabs'),
            tabContent = document.querySelectorAll('.slider-tabs-content'),
            tabName;

        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav);
        })

        function selectTabNav(){
            tabNav.forEach(item=>{
                item.classList.remove('active-tabs');
            });
            this.classList.add('active-tabs');
            tabName = this.getAttribute('tab-name');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName){
            tabContent.forEach(item =>{
                item.classList.contains(tabName) ? item.classList.add('active-tabs') : item.classList.remove('active-tabs');
            })
        }
    }

    return(
        <div className={'slider-wrapper'}>
            <div className={'slider-navbar'}>
                <div className={'slider-navbar-tabs'}>
                    <div className={'slider-tabs active-tabs'} onClick={handleClick} tab-name = 'tab-1'>СПЕЦПРЕЛОЖЕНИЯ</div>
                    <div className={'slider-tabs'} onClick={handleClick} tab-name = 'tab-2'>АФИША</div>
                    <div className={'slider-tabs'} onClick={handleClick} tab-name = 'tab-3'>КАТЕГОРИИ ОТДЫХА</div>
                </div>
                <div className={'slider-navbar-buttons'}>
                    <a href="#"><img src= {img_prev} alt=""/></a>
                    <a href="#"><img src= {img_next} alt=""/></a>
                </div>
            </div>
            <div className={'slider-content'}>
                <div className={'slider-tabs-content active-tabs tab-1'}>
                    <div className={'slider-tabs-item'}>
                        <div className={'slider-tabs-item-discount'}>
                            <h3>-20%</h3>
                            <p>Для тех кто рядом</p>
                        </div>
                        <img src={img_1_1} alt=""/>
                    </div>
                    <div className={'slider-tabs-item'}>
                        <div className={'slider-tabs-item-discount'}>
                            <h3>-10%</h3>
                            <p>Раннее бронирование</p>
                        </div>
                        <img src={img_1_2} alt=""/>
                    </div>
                </div>
                <div className={'slider-tabs-content tab-2'}>
                    <div className={'slider-tabs-item'}>
                        <div className={'slider-tabs-item-discount'}>
                            <h3>-10%</h3>
                            <p>Раннее бронирование</p>
                        </div>
                        <img src={img_1_2} alt=""/>
                    </div>
                    <div className={'slider-tabs-item'}>
                        <div className={'slider-tabs-item-discount'}>
                            <h3>-20%</h3>
                            <p>Для тех кто рядом</p>
                        </div>
                        <img src={img_2_1} alt=""/>
                    </div>
                </div>
                <div className={'slider-tabs-content tab-3'}>
                    <div className={'slider-tabs-item'}>
                        <div className={'slider-tabs-item-rest'}>
                            <p>Семейный отдых</p>
                        </div>
                        <img src={img_2_1} alt=""/>
                    </div>
                    <div className={'slider-tabs-item'}>
                        <div className={'slider-tabs-item-rest'}>
                            <p>Оздоровление</p>
                        </div>
                        <img src={img_2_2} alt=""/>
                    </div>
                    <div className={'slider-tabs-item'}>
                        <div className={'slider-tabs-item-rest'}>
                            <p>Релакс и красота</p>
                        </div>
                        <img src={img_2_3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;