import './App.css';
import React, {useRef, useState, useEffect} from 'react';
import Bar from './Codeworks/Navbar';
import Home from './Codeworks/Home';
import About from './Codeworks/About';
import Service from './Codeworks/Service';
import Contact from './Codeworks/Contact';

function App() {

  const homeRef = useRef(null);
  const abtRef = useRef(null);
  const serRef = useRef(null);
  const cntRef = useRef(null);

  const [actSec, setActSec] = useState("home");

  const activeMenu = () => {
    const sections = [
      { ref: homeRef, id: "home" },
      { ref: abtRef, id: "about" },
      { ref: serRef, id: "service" },
      { ref: cntRef, id: "contact" },
    ];

    sections.forEach((section) => {
      const element = section.ref.current;
      const rect = element.getBoundingClientRect();

      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setActSec(section.id);
      }
    });
  };


  useEffect(() => {
    window.addEventListener("scroll", activeMenu);
    return () => {
      window.removeEventListener("scroll", activeMenu);
    };
  }, []);


  return (
    <div>
      <Bar hm={homeRef} abt={abtRef} ser={serRef} cnt={cntRef} act={actSec}></Bar>
      <div className="homepage">
        <Home home={homeRef} about={abtRef}></Home>
        <About about={abtRef} service={serRef}></About>
      </div>
      <Service service={serRef}></Service>
      <Contact contact={cntRef}></Contact>
    </div>
  );
}

export default App;

