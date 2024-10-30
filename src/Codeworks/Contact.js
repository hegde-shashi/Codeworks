import React, { useState, useEffect, useRef } from 'react'
import User from '../Images/Icon/User.svg'
import Email from '../Images/Icon/Email.svg'
import Phone from '../Images/Icon/Phone.svg'
import Project from '../Images/Icon/Project.svg'
import College from '../Images/Icon/College.svg'
import Sub from '../Images/Icon/Sub.svg'
import Details from '../Images/Icon/Details.svg'
import Insta from '../Images/Icon/Insta.svg'
import emailjs from 'emailjs-com';

function Contact(props) {
    const domains = ['HTML, CSS, JavaScript', 'ReactJS', 'NodeJS', 'Java', 'Python', 'Machine Learning']
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        college: '',
        dmn: '',
        subject: '',
        details: ''
    });
    const [isOpen, setIsOpen] = useState(false)
    const [option, setOption] = useState("Select domain*");
    const [isPlaceholder, setIsPlaceholder] = useState(true);
    const [lable, setLable] = useState('')
    const [gotError, setGotError] = useState(false)
    const [validation, setValidation] = useState(true)
    const [error, setError] = useState({
        name: false,
        email: false,
        mobile: false,
        college: false,
        dmn: false,
        subject: false,
        details: false
    });
    const dropdownRef = useRef(null);

    const select = () => {
        setIsOpen(!isOpen);
    }

    const domainClick = (domain) => {
        setOption(domain)
        setIsPlaceholder(false)
        setIsOpen(false)
        setFormData({ ...formData, dmn: domain })
        setError({...error, dmn: false})
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

    const focus = (e) => {
        setLable(e.target.id)
    }

    const unfocus = (e) => {
        setLable('')
    }

    // E-Mail
    const errorArray = {}
    let handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    let handleChangeError = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        Object.entries(formData).forEach(([key, value]) => {
            if (value === '') {
                errorArray[key] = true
            }

            else {
                errorArray[key] = false
            }

            setError(errorArray)
        });
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const isEmail = (email) =>
    //         /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    //     if (!isEmail(formData.email)) {
    //         setEmailValidation(false)
    //         // setFormData({ ...formData, email: '' });
    //         setFormData((prevData) => ({ ...prevData, email: '' }));
    //       }


    //     Object.entries(formData).forEach(([key, value]) => {
    //         if (value === '') {
    //             errorArray[key] = true
    //         }

    //         else {
    //             errorArray[key] = false
    //         }

    //         setError(errorArray)
    //     });

    //     const mail = Object.values(formData).every(value => value !== '');


    //     console.log(error)
    //     console.log(formData)

    //     if (mail) {
    //         // emailjs.send(
    //         // 'service_iul2d9g',
    //         // 'template_la6ubg5',
    //         // formData,
    //         // 'iTz5sIdnD7Aw7hTst'
    //         // )
    //         // .then((result) => {
    //         //     alert('Email sent successfully!');
    //         //     console.log(result.text);
    //         // }, (error) => {
    //         //     alert('Failed to send email, please try again.');
    //         //     console.log(error.text);
    //         // });
    //         console.log('send mail')
    //     }
    //     else {
    //         setGotError(true)
    //         console.log("dont send")
    //     }


    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmail = (email) =>
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

        const isMobile = (mobile) =>
            /^[6-9]\d{9}$/i.test(mobile);

        const newErrorArray = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (key === "email" && !isEmail(value)) {
                setValidation(false)
                newErrorArray[key] = true;
                setFormData({ ...formData, email: '' });
            } else if (key === "mobile" && !isMobile(value)) {
                setValidation(false)
                newErrorArray[key] = true;
                setFormData({ ...formData, mobile: '' });
            } else if (value === '') {
                newErrorArray[key] = true;
            } else {
                newErrorArray[key] = false;
            }
        });

        props.data(formData)

        setError(newErrorArray);

        const noErrors = Object.values(newErrorArray).every((value) => value === false);

        if (noErrors) {
            // emailjs.send(
            // 'service_iul2d9g',
            // 'template_la6ubg5',
            // formData,
            // 'iTz5sIdnD7Aw7hTst'
            // )
            // .then((result) => {
            //     alert('Email sent successfully!');
            //     console.log(result.text);
            // }, (error) => {
            //     alert('Failed to send email, please try again.');
            //     console.log(error.text);
            // });

            // emailjs.send(
            // 'service_iul2d9g',
            // 'template_n1b7m8w',
            // formData,
            // 'iTz5sIdnD7Aw7hTst'
            // )
            // .then((result) => {
            //     alert('Email sent successfully!');
            //     console.log(result.text);
            // }, (error) => {
            //     alert('Failed to send email, please try again.');
            //     console.log(error.text);
            // });
            props.sub(true)
            console.log("send mail");
        } else {
            setGotError(true);
            console.log("don't send");
        }

        console.log(newErrorArray); 
        console.log(formData); 
    };

    // useEffect ( () => {
    //     if (!gotError) {
    //         document.body.style.overflow = 'hidden'
    //     }
    // })


    return (
        <div className='cntctHead' ref={props.contact}>
            <div className='head'>
                CONTACT <span className='project'>US</span>
            </div>
            <div className='formLine'>
                <p>Fill the form</p>
            </div>

            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className='form-details'>
                        <label htmlFor="name" className={`${lable === 'name' ? 'lable-border' : ''} ${error.name ? 'error' : ''} lable icon`}><img src={User} alt='user' width='50%' height='50%'></img></label>
                        <input type="text" value={formData.name} onChange={gotError ? handleChangeError : handleChange} className={`${error.name ? 'error' : ''} form-input`} id="name" name="name" placeholder='Your Name*' onFocus={focus} onBlur={unfocus} />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="email" className={`${lable === 'email' ? 'lable-border' : ''} ${error.email ? 'error' : ''} lable icon`}><img src={Email} alt='email' width='50%' height='50%'></img></label>
                        <input type="email" value={formData.email} onChange={gotError ? handleChangeError : handleChange} className={`${error.email ? 'error' : ''} form-input`} id="email" name="email" placeholder={`${validation ? "Your E-Mail*" : 'Enter correct E-Mail address'}`} onFocus={focus} onBlur={unfocus} />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-details'>
                        <label htmlFor="mobile" className={`${lable === 'mobile' ? 'lable-border' : ''} ${error.mobile ? 'error' : ''} lable icon`}><img src={Phone} alt='phone' width='50%' height='50%'></img></label>
                        <input type="number" value={formData.mobile} onChange={gotError ? handleChangeError : handleChange} className={`${error.mobile ? 'error' : ''} form-input`} id="mobile" name="mobile" placeholder={`${validation ? "Your contact number*" : 'Enter correct contact number'}`} onFocus={focus} onBlur={unfocus} />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="college" className={`${lable === 'college' ? 'lable-border' : ''} ${error.college ? 'error' : ''} lable icon`}><img src={College} alt='college' width='50%' height='50%'></img></label>
                        <input type="text" value={formData.college} onChange={gotError ? handleChangeError : handleChange} className={`${error.college ? 'error' : ''} form-input`} id="college" name="college" placeholder='College name with city*' onFocus={focus} onBlur={unfocus} />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-details rel'>
                        <label htmlFor="domain" className={`${isOpen ? 'lable-border' : ''} ${error.dmn ? 'error' : ''} lable icon domain-img`}><img src={Project} alt='project' width='50%' height='50%'></img></label>
                        <div name="domain" id="domain" className={`${error.dmn ? 'error' : ''} form-input`} ref={dropdownRef}>
                            <div className={`dropdown-selected ${isPlaceholder ? `drpdwn-PH` : ''} ${isOpen ? `uparrow` : ''}`} onClick={select}>{option}</div>
                        </div>
                        {isOpen && <ul className="dropdown-options">
                            {domains.map((domain, index) => (
                                <li key={index} onClick={() => domainClick(domain)}>
                                    {domain}
                                </li>
                            ))}
                        </ul>}
                    </div>

                    <div className='form-details'>
                        <label htmlFor="subject" className={`${lable === 'subject' ? 'lable-border' : ''} ${error.subject ? 'error' : ''} lable icon`}><img src={Sub} alt='subject' width='50%' height='50%'></img></label>
                        <input value={formData.subject} onChange={gotError ? handleChangeError : handleChange} type="text" className={`${error.subject ? 'error' : ''} form-input`} id="subject" name="subject" placeholder='Subject of the project*' onFocus={focus} onBlur={unfocus} />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-details'>
                        <label htmlFor="details" className={`${lable === 'details' ? 'lable-border' : ''} ${error.details ? 'error' : ''} lable icon`}><img src={Details} alt='details' width='50%' height='50%'></img></label>
                        <textarea value={formData.details} onChange={gotError ? handleChangeError : handleChange} type="tex" className={`${error.details ? 'error' : ''} form-input text-area`} id="details" name="details" placeholder='Describe your project*' onFocus={focus} onBlur={unfocus} />
                    </div>
                </div>

                {gotError && <div className='goterror'>
                    Please fill all the required details
                    </div>}

                <div className='button'>
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>

            <div className='or'>
                <p>Or</p>
                <div className='social-media'>
                    <a className='email-link round icon' href='mailto:hegdeshashidhar123@gmail.com'>
                        <img src={Email} alt='email' width='50%' height='50%'></img>
                    </a>
                    <a className='insta-link round icon'>
                        <img src={Insta} alt='insta' width='50%' height='50%'></img>
                    </a>
                    <a className='call-link round icon' href='tel:+919449431866'>
                        <img src={Phone} alt='call' width='50%' height='50%'></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact