import './App.css';
import React, {useRef, useState, useEffect} from 'react';
import Bar from './Codeworks/Navbar';
import Home from './Codeworks/Home';
import About from './Codeworks/About';
import Service from './Codeworks/Service';
import Contact from './Codeworks/Contact';
import BgImg from './Codeworks/BgImg';
import Confirm from './Codeworks/Confirm';


function App() {

  const homeRef = useRef(null);
  const abtRef = useRef(null);
  const serRef = useRef(null);
  const cntRef = useRef(null);

  const [actSec, setActSec] = useState("home");
  const[submit, setSubmit] = useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    dmn: '',
    subject: '',
    details: ''
  });

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
    window.addEventListener("unload", activeMenu);
    if (submit) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener("scroll", activeMenu);
      window.removeEventListener("unload", activeMenu);
      if (!submit) {
        document.body.style.overflow = 'visible'
      }
    };
  }, [submit]);




  return (
    <div>
      <Bar hm={homeRef} abt={abtRef} ser={serRef} cnt={cntRef} act={actSec}></Bar>
      <BgImg></BgImg>
      <Home home={homeRef} about={abtRef}></Home>
      <About about={abtRef} service={serRef}></About>
      <Service service={serRef}></Service>
      <Contact contact={cntRef} data={setFormData} sub={setSubmit}></Contact>
      {submit && <Confirm data={formData} sub={submit} edit={setSubmit}></Confirm>}
      {/* <Confirm data={formData} sub={submit}></Confirm> */}
    </div>
  );
}

export default App;

