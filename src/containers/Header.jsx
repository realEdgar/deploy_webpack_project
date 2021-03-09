import React from 'react'
import iconMenu from '../images/icon-hamburger.svg'
// import Nav from '../components/Nav'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const isDesktop = useMediaQuery( { query: '(min-device-width: 700px)' } )
    const isDesktopMax = useMediaQuery( { query: '(max-width: 1440px)' } )
    const isMobile = useMediaQuery( { query: '(min-device-width: 320px)' } )
    const isMobileMax = useMediaQuery( { query: '(max-width: 699px)' })
    return (
        <header id="header" className="header" >
            <div>
                <h1 className="header__title">crowdfund</h1>
                { (isMobile && isMobileMax) && 
                    <button className="header__menu">
                        <img src={ iconMenu } alt="Hamburger menu" />
                    </button>
                }             
                { (isDesktop && isDesktopMax) &&
                    <nav className="header__nav-second">
                        <ul className="nav__list-second">
                            <li><a href="/" >About</a></li>
                            <li><a href="/" >Discover</a></li>
                            <li><a href="/" >Get started</a></li>
                        </ul>
                    </nav>
                }
            </div>            
        </header>
    ) 
}    

export default Header