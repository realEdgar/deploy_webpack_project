import React from 'react'
import bookmarker from '../images/icon-bookmark.svg'

export class Bookmarker extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clase: 'link__pic', title: 'Bookmark' }
    }

    handleClick = ev => {
        if(this.state.clase == 'link__pic') {
            this.setState({
                clase: 'link__pic border',
                title: 'Bookmarked'
            })
        } 
        if(this.state.clase == 'link__pic border') {
            this.setState({
                clase: 'link__pic',
                title: 'Bookmark'
            })
        }
    }

    render() {
       return (
            <button className={ this.state.clase } onClick={ this.handleClick }>
                <img className="bookmarker" src={ bookmarker } alt="bookmarker" />
                <span className="bockmarked">{this.state.title}</span>
            </button>  
        ) 
    }
    
}
