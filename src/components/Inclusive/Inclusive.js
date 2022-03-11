import React from "react";
import './Inclusive.scss';
import './Inclusive_360.scss';
import img_one_slide from './img/slide_1.png'
import img_two_slide from './img/slide_2.png'
import img_three_slide from './img/slide_3.png'


const Inclusive = () => {
    return(
        <div
        className={'inclusive-container'}>
            <div className={'inclusive-one-columns'}>
                <div className={'inclusive-one-columns-title'}>
                    <h2>Все включено</h2>
                    <a href="#" className={'prev-button'}></a>
                    <a href="#" className={'next-button'}></a>
                </div>
                <div className={'inclusive-one-columns-content'}>
                    <div className={'inclusive-one-columns-one-elem'}>
                        <img src={img_one_slide} alt=""/>
                        <div className={'inclusive-content'}>
                            <p>Заниматесь в тренажерном зале и посещайте групповые тренировки</p>
                            <a href="#" className={'inclusive-link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                        </div>
                    </div>
                    <div className={'inclusive-one-columns-two-elem'}>
                        <h3>Оздоровление</h3>
                        <p className={'sanitation'}>Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу</p>
                        <img src={img_two_slide} alt=""/>
                        <div className={'inclusive-content'}>
                            <p>Питаться в ресторане шведской линии согласно выбранному варианту</p>
                            <a href="#" className={'inclusive-link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={'inclusive-two-columns'}>
                <img src={img_three_slide} alt=""/>
                <div className={'inclusive-two-columns-content'}>
                    <div className={'inclusive-content'}>
                        <p>Исследовать все общедоступные зоны и территории комплекса</p>
                        <a href="#" className={'inclusive-link-more'}>ЧИТАТЬ БОЛЬШЕ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inclusive;