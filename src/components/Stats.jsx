import React from 'react'

export const Stats = () => {
    return (
        <section className="main__section-two">
            <div className="stats-container">
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
            </div>            
            <div className="out-line">
                <div className="in-line"></div>
            </div>
        </section>
    )
}