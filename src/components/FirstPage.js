import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import {TweenMax, Power3} from 'gsap'

import Arrow from '../img/icons8-left-arrow-20 (1).png'

function FirstPage(props) {

    let background = useRef(null)
    

    useEffect(() => {
        TweenMax.from( background, 2.0, {opacity: .5, y: -1080, ease: Power3.easeInOut})
    }, [])

    return (
        <div
        ref={el => background = el}
        className="first-page">
            <Link to='/'>
                <img src={Arrow} className='back'></img>
            </Link>
            <div className="contaaner">
                <h2>Aaaaa my first animation, я очень рад!</h2>
            </div>
            
        </div>
    )
}

export default FirstPage