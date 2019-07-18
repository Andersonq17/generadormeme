import React from 'react'
import problem from '../img/trollface.png'
    function Header(){
        return (
            <header>
                <img src={problem} alt="problem?"/>
                <p>Generador de memes</p>
            </header>
        )
    }
export default Header