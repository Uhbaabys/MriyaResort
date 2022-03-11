import React from "react";
import './ChoiseHoliday.scss';
import './ChoiseHoliday_360.scss';
import Slider from "../Slider/Slider";
import Button from "../Button/Button";

const ChoiceHoliday = () => {
    return(
        <div className={'choice-holiday-wrapper'}>
            <div className={'choice-holiday-form-container'}>
                <h2 className={'choice-holiday-title'}>Выберите свой отдых</h2>
                <form action="" className={'choice-holiday-form'}>
                    <div className={'input-container'}>
                        <div className={'input-type-wrapper'}>
                            <input type="text" className={'input-type'} value = 'Семейный отдых'/>
                        </div>
                        <div className={'input-date-wrapper'}>
                            <input type="text" className={'input-date'} value= 'пт, 8 мая — вс, 17 мая'/>
                        </div>
                        <div className={'input-person-wrapper'}>
                            <input type="text" className={'input-persons'} value = '2 взрослых  •  без детей  •  1 номер'/>
                        </div>
                        <input type="submit" className={'input-submit'}/>
                    </div>
                </form>
                <Slider />
            </div>
            <div>
                <div className={'choice-holiday-content'}>
                    <h2 className={'choice-holiday-content-title'}><span>Mriya Resort & SPA —</span><br/> больше чем просто отдых</h2>
                    <p>В окружении необычного природного ландшафта курорт становится по-настоящему уникальным. Это место идеально для тех, кто больше гор любит только море.</p>
                    <Button text = 'О КОМПЛЕКСЕ' style ='white'/>
                </div>
            </div>
        </div>
    )
}

export default ChoiceHoliday;