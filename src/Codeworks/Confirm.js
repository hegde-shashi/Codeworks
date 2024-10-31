import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';

function Confirm(props) {

    const [mail, setMail] =useState(true)
    const [thanks, setThanks] =useState(false)
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')

    const send = () => {
        emailjs.send(
        'service_iul2d9g',
        'template_la6ubg5',
        props.data,
        'iTz5sIdnD7Aw7hTst'
        )
        .then((result) => {
            props.setData ({
                name: '',
                email: '',
                mobile: '',
                college: '',
                dmn: '',
                subject: '',
                details: ''
            })
            props.setOpt ('Select domain*')
            props.setPlc (true)
        }, (error) => {
            alert('We have some technical issue from our end. So please try again or contact us on mail/insta/mobile')
            console.log(error.text);
        });

        setMail(false)
        setThanks(true)

        emailjs.send(
        'service_iul2d9g',
        'template_n1b7m8w',
        props.data,
        'iTz5sIdnD7Aw7hTst'
        )
    }

    const edit = () => {
        props.edit(false)
    }


    const updateClassName = () => {
        if (window.innerWidth > window.innerHeight) {
            setFirst('confirm-l');
            setSecond('thnks-l');
        } else {
            setFirst('confirm-p');
            setSecond('thnks-p')
        }
    };


    useEffect (() => {
        updateClassName();
        window.addEventListener('resize', updateClassName);

        if (thanks) {setTimeout(() => {
            const firstOne = document.getElementsByClassName('one')[0];
            if (firstOne) {
              firstOne.style.visibility = 'visible';
            }
          }, 500);
    
          // Reveal 'two' after 1500ms
          setTimeout(() => {
            const secondTwo = document.getElementsByClassName('two')[0];
            if (secondTwo) {
              secondTwo.style.visibility = 'visible';
            }
          }, 1500);
    
          // Reveal 'three' after 2500ms
          setTimeout(() => {
            const firstThree = document.getElementsByClassName('three')[0];
            if (firstThree) {
              firstThree.style.visibility = 'visible';
            }
          }, 2500);
    
        setTimeout(() => {
            // setThanks(false)
            props.edit(false)
            document.body.style.overflow = 'visible'
            if (props.hm.current) {
                props.hm.current.scrollIntoView({
                });
              }
        }, 2600);}
        return () => window.removeEventListener('resize', updateClassName);
    })

    return (
        <div className='submit-review'>
            {mail && <div className={first}>
                <div className='confirm-user'>
                    <p>Hi <i>{props.data.name},</i></p>
                    <p>We will contact you on below given mobile number/E-Mail id. Make sure you entered correct details</p>
                    <p>Mobile : <i>{props.data.mobile}</i></p>
                    <p>E-Mail : <i>{props.data.email}</i></p>
                </div>
                <div className='confirm-btn-hd'>
                    <div className='btn send' onClick={send}>
                        Send
                    </div>
                    <div className='btn edit' onClick={edit}>
                        Edit
                    </div>
                </div>
            </div>}
            {thanks && <div className={second}>
                <div className='thnks'>
                    <p>Thanks for your interest.</p>
                     <p>We will discuss about this project soon ;&#41;</p>
                </div>
                <div className='back-link'>
                    <div className='count'>Going back home in <span className='one'>1..</span><span className='two'>2..</span><span className='three'>3..</span></div>
                </div>
            </div>}

        </div>
    )
}

export default Confirm