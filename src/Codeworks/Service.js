import React, { useState, useEffect } from 'react'
import HtmlCssJs from '../Images/Icon/HtmlCssJs.svg'
import ReactJs from '../Images/Icon/React.svg'
import NodeJs from '../Images/Icon/NodeJs.svg'
import Java from '../Images/Icon/Java.svg'
import Python from '../Images/Icon/Python.svg'
import ML from '../Images/Icon/MachineLearning.svg'

function Service(props) {
    const [className, setClassName] = useState('')
    const [grid, setGrid] = useState('')
    const updateClassName = () => {
        if (window.innerWidth > window.innerHeight) {
            setClassName('landscape');
            setGrid('gridLandscape');
        } else {
            setClassName('portrait');
            setGrid('gridPotrait')
        }
    };

    useEffect(() => {
        updateClassName();
        window.addEventListener('resize', updateClassName);

        return () => window.removeEventListener('resize', updateClassName);
    }, []);

    return (
        <div className='serviceHead' ref={props.service}>
            <div className='head'>
                OUR <span className='expertise'>SERVICES</span>
            </div>
            <div className={grid}>
                <div className='gridItem'>
                    <div className='num'>0</div>
                    <div className={className}>
                        <div className='icon'>
                            <img src={HtmlCssJs} alt='html' width='80%' height='80%'></img>
                        </div>
                        <div className='icon'>
                            HTML, CSS and JS
                        </div>
                    </div>
                </div>
                <div className='gridItem'>
                    <div className='num'>1</div>
                    <div className={className}>
                        <div className='icon'>
                            <img src={ReactJs} alt='react' width='80%' height='80%'></img>
                        </div>
                        <div className='icon'>
                            ReactJs
                        </div>
                    </div>
                </div>
                <div className='gridItem'>
                    <div className='num'>2</div>
                    <div className={className}>
                        <div className='icon'>
                            <img src={NodeJs} alt='node' width='80%' height='80%'></img>
                        </div>
                        <div className='icon'>
                            NodeJs
                        </div>
                    </div>
                </div>
                <div className='gridItem'>
                    <div className='num'>3</div>
                    <div className={className}>
                        <div className='icon'>
                            <img src={Java} alt='java' width='80%' height='80%'></img>
                        </div>
                        <div className='icon'>
                            Java
                        </div>
                    </div>
                </div>
                <div className='gridItem'>
                    <div className='num'>4</div>
                    <div className={className}>
                        <div className='icon'>
                            <img src={Python} alt='python' width='80%' height='80%'></img>
                        </div>
                        <div className='icon'>
                            Python
                        </div>
                    </div>
                </div>
                <div className='gridItem'>
                    <div className='num'>5</div>
                    <div className={className}>
                        <div className='icon'>
                            <img src={ML} alt='hml' width='80%' height='80%'></img>
                        </div>
                        <div className='icon'>
                            Machine Learning
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service