import React from 'react'
import { Article } from './Article'

export const About = () => {
    return (
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
            <Article 
                title="Bamboo Stand"
                price="Pledge $25 or more"
                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                stat="101"
                button="Select Reward"
                classStyle="article__button"
            />
            <Article 
                title="Black Edition Stand"
                price="Pledge $75 or more"
                description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                stat="64"
                button="Select Reward"
                classStyle="article__button"
            />
            <Article 
                title="Mahogany Special Edition"
                price="Pledge $200 or more"
                description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                stat="0"
                button="Out of Stock"
                classStyle="article__button-grey"
            />
        </section>
    )
}
