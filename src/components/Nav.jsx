import React from 'react'
import ReactDOM from 'react-dom'

export const Nav = (props) => {
    if(!props.isOpen) {
        return null
    }

    return ReactDOM.createPortal(              
        <nav className="header__nav" >
            <button className="nav__button">X</button>
            <ul className="nav__list">
                { props.children }
            </ul>
        </nav>, 
        document.getElementById('app')
    )
}