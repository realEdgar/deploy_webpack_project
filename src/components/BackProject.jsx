import React from 'react'
import mastercraft from '../images/logo-mastercraft.svg'
import { Bookmarker } from './Bookmarker.jsx'

class BackProject extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {clase: 'link__pic', title: 'Bookmark'}
    // }

    // handleClick = ev => {
    //     if(this.state.clase == 'link__pic') {
    //         this.setState({
    //             clase: 'link__pic border',
    //             title: 'Bookmarked'
    //         })
    //     } 
    //     if(this.state.clase == 'link__pic border') {
    //         this.setState({
    //             clase: 'link__pic',
    //             title: 'Bookmark'
    //         })
    //     }
    // }

    render() {
        console.log(this.state) 
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
                    <button className="link__button" onClick={this.handleClick} >
                        Back this project
                    </button>
                    <Bookmarker />
                </div>                        
            </section>
        )
    }    
}

export default BackProject