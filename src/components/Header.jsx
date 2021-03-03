import React from 'react'
import iconMenu from '../images/icon-hamburger.svg'
import { Nav } from './Nav'

export const Header = () => {
    return (
        <header className="header">
            <div>
                <h1 className="header__title">crowdfund</h1>
                <figure className="header__figure">
                    <img src={iconMenu} alt="Hamburger menu" />
                </figure>  
            </div>
            <Nav />
        </header>
    );
}