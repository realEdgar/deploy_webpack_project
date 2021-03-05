import React from 'react'
import mastercraft from '../images/logo-mastercraft.svg'
import bookmarker from '../images/icon-bookmark.svg'
import { Sucess } from './Sucess'
import { ModalDefault } from './ModalDefault'


export const Main = () => {
    return (
        <main className="main">
            <section className="main__section-one">
                <figure className="section-one__pic">
                    <img src={mastercraft} alt="" />
                </figure>
                <h3 className="section-one__title">Mastercraft Bamboo Monitor Riser</h3>
                <p className="section-one__description">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="section-one__link">
                    <button className="link__button">Back this project</button>
                    <figure className="link__pic">
                        <img src={ bookmarker } alt="" />
                    </figure>  
                </div>                        
            </section>
            <section className="main__section-two">
                <div className="section-two__item-container">
                    <p className="item-price">$89,914</p>
                    <span className="item-back">of $100,000 backed</span>
                    <div></div>
                </div>
                <div className="section-two__item-container">
                    <p className="item-price">5,007</p>
                    <span className="item-back">total backers</span>
                    <div></div>
                </div>
                <div className="section-two__item-container">
                    <p className="item-price">56</p>
                    <span className="item-back">days left</span>
                </div>
                <div className="out-line">
                    <div className="in-line"></div>
                </div>
            </section>
            <section className="main__section-three">
                <h3 className="section-three__title">About this project</h3>
                <p className="section-three__description">
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                    <br /><br />
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
                <article className="section-three__article">
                    <h4 className="article__title">Bamboo Stand</h4>
                    <h5 className="article__price">Pledge $25 or more</h5>
                    <p className="article__description">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.
                    </p>
                    <p className="article__stats">101<span>left</span></p>
                    <button className="article__button">Select Reward</button>
                </article>
                <article className="section-three__article">
                    <h4 className="article__title">Black Edition Stand</h4>
                    <h5 className="article__price">Pledge $75 or more</h5>
                    <p className="article__description">
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                    member list. Shipping is included.
                    </p>
                    <p className="article__stats">64<span>left</span></p>
                    <button className="article__button">Select Reward</button>
                </article>

                <article className="section-three__article">
                    <h4 className="article__title">Mahogany Special Edition</h4>
                    <h5 className="article__price">Pledge $200 or more</h5>
                    <p className="article__description">
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                    to our Backer member list. Shipping is included.
                    </p>
                    <p className="article__stats">0<span>left</span></p>
                    <button className="article__button-grey">Out of Stock</button>
                </article>
            </section>
            <ModalDefault isOpen={true} />
        </main>
    )
}