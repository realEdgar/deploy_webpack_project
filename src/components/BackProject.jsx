import React from 'react'
import mastercraft from '../images/logo-mastercraft.svg'
import bookmarker from '../images/icon-bookmark.svg'

export const BackProject = () => {
    return (
        <section className="main__section-one">
            <figure className="section-one__pic">
                <img src={mastercraft} alt="" />
            </figure>
            <h3 className="section-one__title">
                Mastercraft Bamboo Monitor Riser
            </h3>
            <p className="section-one__description">
                A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>
            <div className="section-one__link">
                <button className="link__button">
                    Back this project
                    </button>
                <figure className="link__pic">
                    <img className="bookmarker" src={ bookmarker } alt="bookmarker" />
                    <span className="bockmarked">Bookmark</span>
                </figure>  
            </div>                        
        </section>
    )
}