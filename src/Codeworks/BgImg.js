import React, { useState } from 'react'
import Lights from '../Images/Light.png'

function BgImg() {

    const [light, setLight] = useState('')
    setTimeout(() => {
        setLight('display-block')
    }, 2000);

    return (
        <div className="homepage">
            <div className='intro-box'>
                <div className='intro'>&lt; CODE WORKS &gt;</div>
            </div>
            <div id={light} className='light-box'>
                <img src={Lights} className='img-light'></img>
            </div>
        </div>
    )
}

export default BgImg