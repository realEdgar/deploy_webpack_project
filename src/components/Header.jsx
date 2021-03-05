import React, { Component } from 'react'
import iconMenu from '../images/icon-hamburger.svg'
import { Nav } from './Nav'

class Header extends Component {
    render() {
        return (
            <header id="header" className="header" >
                <div>
                    <h1 className="header__title">crowdfund</h1>
                    <button className="header__menu">
                        <img src={ iconMenu } alt="Hamburger menu" />
                    </button>
                </div>
                <Nav isOpen={true} >
                    <li><a href="#">About</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Get Started</a></li>    
                </Nav> 
            </header>
        )        
    }        
}

export default Header