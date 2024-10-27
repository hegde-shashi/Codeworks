import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import Menu from '../Images/Icon/Menu.svg'
import Close from '../Images/Icon/Close.svg'

function Bar(props) {

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null); 

  const select = () => {
    setIsOpen(!isOpen);
  }

  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const home = () => {
    if (props.hm.current) {
      props.hm.current.scrollIntoView({
        behavior: 'smooth' 
      });
    }
  };

  const about = () => {
    if (props.abt.current) {
      props.abt.current.scrollIntoView({
        behavior: 'smooth' 
      });
    }
  };

  const service = () => {
    if (props.ser.current) {
      props.ser.current.scrollIntoView({
        behavior: 'smooth' 
      });
    }
  };

  const contact = () => {
    if (props.cnt.current) {
      props.cnt.current.scrollIntoView({
        behavior: 'smooth' 
      });
    }
  };


  return (
    <div className="navbars">
      <div className="containers">
      <div className="menu">
          <div className="menu-icon" ref={dropdownRef} onClick={select}><img src= {isOpen ? Close : Menu} alt="menu" width='60%' height='60%'></img></div>

        </div>
        <div className="logo" onClick={home}>&lt;/&gt; Code Works</div>
        <div className="details">
          <div id= {props.act === 'home' ? 'menu-active' : ''} className='menu-pad' onClick={home}>Home</div>
          <div id= {props.act === 'about' ? 'menu-active' : ''} className="menu-pad" onClick={about}>About</div>
          <div id= {props.act === 'service' ? 'menu-active' : ''} className="menu-pad" onClick={service}>Services</div>
          <div id= {props.act === 'contact' ? 'menu-active' : ''} className="menu-pad" onClick={contact}>Contact</div>
        </div>
        
      </div>
      {isOpen && <ul  className="menu-dropdown">
            <li id= {props.act === 'home' ? 'menu-active' : ''} onClick={home}>Home</li>
            <li id= {props.act === 'about' ? 'menu-active' : ''} onClick={about}>About</li>
            <li id= {props.act === 'service' ? 'menu-active' : ''} onClick={service}>Services</li>
            <li id= {props.act === 'contact' ? 'menu-active' : ''} onClick={contact}>Contact</li>
          </ul>}
    </div>
  );
}

export default Bar;
