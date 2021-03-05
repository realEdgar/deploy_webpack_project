import React from 'react'
import ReactDOM from 'react-dom'

export const ModalDefault = (props) => {
    if(!props.isOpen) {
        return null
    }

    return ReactDOM.createPortal(              
        <section className="main__section-three">
            <h3 className="section-three__title">Back this project</h3>
            <p className="section-three__description">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>
            <article className="section-three__article">
                <h4 className="article__title">Pledge with no reward</h4>
                <p className="article__description">
                    Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.
                </p>
            </article>
            <article className="section-three__article">
                <h4 className="article__title">Bamboo Stand</h4>
                <h5 className="article__price">Pledge $25 or more</h5>
                <p className="article__description">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.
                </p>
                <p className="article__stats">101<span>left</span></p>
            </article>
            <article className="section-three__article">
                <h4 className="article__title">Black Edition Stand</h4>
                <h5 className="article__price">Pledge $75 or more</h5>
                <p className="article__description">
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.
                </p>
                <p className="article__stats">64<span>left</span></p>
            </article>
            <article className="section-three__article">
                <h4 className="article__title">Mahogany Special Edition</h4>
                <h5 className="article__price">Pledge $200 or more</h5>
                <p className="article__description">
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                    to our Backer member list. Shipping is included.
                </p>
                <p className="article__stats">0<span>left</span></p>
            </article>
        </section>, 
        document.getElementById('app')
    )
}