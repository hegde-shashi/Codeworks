import React from "react";

function Home(props) {

  const about = () => {
    if (props.about.current) {
      props.about.current.scrollIntoView({
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="tagline" ref={props.home}>
      <div className="tag">
        <div className="pad">
          &lt;YOUR <span className="idea">IDEA</span>&gt;
        </div>
        <div className="pad">
          &lt;OUR <span className="expertise">EXPERTISE</span>&gt;
        </div>
        <div className="pad">
          &lt;PERFECT <span className="project">PROJECT</span>&gt;
        </div>
      </div>
      <div className="lm"><span onClick={about}>Learn More <span className="lm-arw">--&gt;</span></span></div>
    </div>
  );
}

export default Home;
