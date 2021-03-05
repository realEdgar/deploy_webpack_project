import React from 'react'
import sucessLogo from '../images/icon-check.svg'

export const Sucess = () => {
    return (
        <div className="container__modal">
            <figure className="container__img">
                <img src={sucessLogo} alt="logo sucess"/>
            </figure>
            <h3 className="modal__title">Thanks for your support!</h3>
            <p className="modal__description">Your pledgs us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed</p>
            <button className="btm">Got it!</button>
        </div>
    )
}