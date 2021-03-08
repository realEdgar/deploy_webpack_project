import React from 'react'

class Nav extends React.Component {

    render() {
        return (              
            <nav className="header__nav" >
                <button className="nav__button" onClick={this.handleClick}>X</button>
                <ul className="nav__list">
                    { this.props.children }
                </ul>
            </nav>
        )
    }    
}

export default Nav