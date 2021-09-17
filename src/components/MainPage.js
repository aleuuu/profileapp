import React from "react";
import Header from '../components/Header'
import Content from '../components/Content'
import Back from '../img/nature.mp4'

import { useEffect, useRef } from "react";
import {TweenMax, Power3} from 'gsap'

function MainPage(props) {

    let text = useRef(null)

    useEffect(() => {
        TweenMax.from(text, 1.5, {opacity: 0, y: 1080, ease: Power3.easeOut})
    }, [])

    return (
        <div
            ref={el => text = el}
        >
            <Header/>
            <Content/>
        </div>
    )
}

export default MainPage