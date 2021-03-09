import React from 'react';
import Header from './Header.jsx'
import { Main } from './Main.jsx'

class App extends React.Component {

    state = { modalIsOpen: false }

    closeModal = e => {
        this.setState({
            modalIsOpen: false
        })
    }
    openModal = e => {
        this.setState({
            modalIsOpen: true
        })
    }

    render() {
        return (
            <>
                <Header 
                    onCloseModal={this.closeModal}
                    onOpenModal={this.openModal}
                    modalIsOpen={this.state.modalIsOpen}
                    />
                <Main />
            </>        
        );
    }
    
}

export default App;