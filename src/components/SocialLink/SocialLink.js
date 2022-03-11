import React from "react";
import './SocialLink.scss';

const SocialLink = (props) => {
    return (
        <div className={'social-container'}>
            <button className={'social-button'}>
                <img src={props.image} alt=""/>
            </button>
        </div>

    )
}

export default SocialLink;