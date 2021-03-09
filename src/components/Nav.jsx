import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {

    if(!props.isOpen) {
        return null
    }
    return ReactDOM.createPortal(                     
        <nav className="header__nav" >
            <button className="nav__button" onClick={props.onClose} >X</button>
            <ul className="nav__list">
                { props.children }
            </ul>
        </nav>, document.getElementById('app')
    )   
}

export default Modal