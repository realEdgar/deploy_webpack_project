import React from 'react'
import iconMenu from '../images/icon-hamburger.svg'

export const Header = () => {
    return (
        <header className="header">
            <div>
            <h1 className="header__title">crowdfund</h1>
            <figure className="header__figure">
                <img src={iconMenu} alt="Hamburger menu" />
            </figure>  
            </div>      
            <nav className="header__nav">
            <ul className="nav__list">
                <li><a href="#">About</a></li>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Get Started</a></li>
            </ul>
            </nav>
        </header>
    );
}