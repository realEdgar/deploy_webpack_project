import React from 'react'
import BackProject from '../components/BackProject'
import { Stats } from '../components/Stats'
import { About } from '../components/About'
import { Sucess } from '../components/Sucess'
import { ModalDefault } from '../components/ModalDefault'


export const Main = () => {
    return (
        <main className="main">
            <BackProject />
            <Stats />
            <About />
            <ModalDefault isOpen={false} />
        </main>
    )
}