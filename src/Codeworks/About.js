import React from "react";

function About(props) {

    const service = () => {
        if (props.service.current) {
          props.service.current.scrollIntoView({
            behavior: 'smooth' 
          });
        }
      };

    return (
        <div className="abt" ref={props.about}>
            <div className="aboutDisplay">
                <div className="abtHeadline">
                    <div className="abtUsLine">About us</div>
                    <div className="clr">
                        <div className="red"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                    </div>
                </div>
                <div className="abtUs">
                    <div className="abtUsHead">
                        ABOUT&nbsp;<span className="idea">US</span>
                    </div>
                    <div className="abtUsPara">
                        <p>
                            <span className="para">&lt;P&gt;</span> Sint anim mollit nisi
                            dolor in excepteur id ad ad. Consequat aliqua ullamco fugiat
                            dolore ex ad. Nulla ut excepteur nulla esse irure sint eu
                            consectetur consectetur dolor proident esse. Deserunt veniam do ad
                            minim deserunt commodo qui ullamco eu nisi id qui laborum labore. <span className="para">&lt;/P&gt;</span>
                        </p>
                        <p>
                            <span className="para">&lt;P&gt;</span> Quis et pariatur laborum
                            elit labore minim consectetur. Velit consectetur non ex aute
                            exercitation. Ea ipsum Lorem esse labore tempor commodo eiusmod.
                            Anim aliquip est exercitation eu labore do veniam amet
                            reprehenderit non dolor. <span className="para">&lt;/P&gt;</span>
                        </p>
                    </div>
                    <div className="serLink"><span onClick={service}>Our services <span className="ser-arw">--&gt;</span></span></div>
                </div>
            </div>
        </div>
    );
}

export default About;
