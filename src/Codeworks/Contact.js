import React, { useState, useEffect, useRef} from 'react'
import User from '../Images/Icon/User.svg'
import Email from '../Images/Icon/Email.svg'
import Phone from '../Images/Icon/Phone.svg'
import Project from '../Images/Icon/Project.svg'
import College from '../Images/Icon/College.svg'
import Sub from '../Images/Icon/Sub.svg'
import Details from '../Images/Icon/Details.svg'
import Insta from '../Images/Icon/Insta.svg'
// import emailjs from 'emailjs-com';


function Contact(props) {
    const domains = ['HTML, CSS, JavaScript', 'ReactJS', 'NodeJS', 'Java', 'Python', 'Machine Learning']
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     mobile: '',
    //     college: '',
    //     dmn: '',
    //     subject: '',
    //     details: ''
    // });

    const formData = props.formData
    const setFormData = props.setFormData
    const option = props.opt
    const setOption = props.setOpt
    const isPlaceholder = props.plc
    const setIsPlaceholder = props.setPlc
    const [isOpen, setIsOpen] = useState(false)
    const [lable, setLable] = useState('')
    const [drp, setDrp] = useState(true)
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


    const focus = (e) => {
        if (window.innerWidth < window.innerHeight) {
            setLable('')
            setDrp(false)

        } else {
            setLable(e.target.id)
        }
    }

    const unfocus = (e) => {
        setLable('')
    }


    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        window.addEventListener('resize', focus);
        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener('resize', focus);
        };
    });
    // E-Mail
    const errorArray = {}
    let handleChange = (e) => {
        if (e.target.name === 'mobile') {
            if (e.target.value === "" || (e.target.value.length <= 10 && /^[0-9]\d*$/.test(e.target.value))) {
                setFormData({...formData, mobile: e.target.value})
            }
        } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    let handleChangeError = (e) => {
        if (e.target.name === 'mobile') {
            if (e.target.value === "" || (e.target.value.length <= 10 && /^[0-9]\d*$/.test(e.target.value))) {
                setFormData({...formData, mobile: e.target.value})
            }
        } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        }

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

        setError(newErrorArray);

        const noErrors = Object.values(newErrorArray).every((value) => value === false);

        if (noErrors) {
            props.sub(true)
            console.log("send mail");
        } else {
            setGotError(true);
            console.log("don't send");
        }

        console.log(newErrorArray); 
        console.log(formData); 
    };


    return (
        <div className='cntctHead' ref={props.contact}>
            <div className='head'>
                CONTACT <span className='project'>US</span>
            </div>
            <div className='formLine'>
                <p>Fill the form</p>
            </div>
            {gotError && <div className='goterror'>
                &#47;*-----  Please fill all the required feiled -----*&#47;
                    </div>}

            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className='form-details'>
                        <label htmlFor="name" id={lable === 'name' ? 'lable-border' : ''} className={`${error.name ? 'error' : ''} lable icon`}><img src={User} alt='user' width='50%' height='50%'></img></label>
                        <input type="text" value={formData.name} onChange={gotError ? handleChangeError : handleChange} className={`${error.name ? 'error' : ''} form-input`} id="name" name="name" placeholder='Your Name*' onFocus={focus} onBlur={unfocus} />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="email" id={lable === 'email' ? 'lable-border' : ''} className={`${error.email ? 'error' : ''} lable icon`}><img src={Email} alt='email' width='50%' height='50%'></img></label>
                        <input type="email" value={formData.email} onChange={gotError ? handleChangeError : handleChange} className={`${error.email ? 'error' : ''} form-input`} id="email" name="email" placeholder={`${validation ? "Your E-Mail*" : 'Enter correct E-Mail address'}`} onFocus={focus} onBlur={unfocus} />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-details'>
                        <label htmlFor="mobile" id={lable === 'mobile' ? 'lable-border' : ''} className={`${error.mobile ? 'error' : ''} lable icon`}><img src={Phone} alt='phone' width='50%' height='50%'></img></label>
                        <input type="text" value={formData.mobile} onChange={gotError ? handleChangeError : handleChange} className={`${error.mobile ? 'error' : ''} form-input`} id="mobile" name="mobile" placeholder={`${validation ? "Your contact number*" : 'Enter correct contact number'}`} onFocus={focus} onBlur={unfocus} />
                    </div>
                    <div className='form-details'>
                        <label htmlFor="college" id={lable === 'college' ? 'lable-border' : ''} className={`${error.college ? 'error' : ''} lable icon`}><img src={College} alt='college' width='50%' height='50%'></img></label>
                        <input type="text" value={formData.college} onChange={gotError ? handleChangeError : handleChange} className={`${error.college ? 'error' : ''} form-input`} id="college" name="college" placeholder='College name with city*' onFocus={focus} onBlur={unfocus} />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-details rel'>
                        <label htmlFor="domain" id={(isOpen && drp) ? 'lable-border' : ''} className={`${error.dmn ? 'error' : ''} lable icon domain-img`}><img src={Project} alt='project' width='50%' height='50%'></img></label>
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
                        <label htmlFor="subject" id={lable === 'subject' ? 'lable-border' : ''} className={`${error.subject ? 'error' : ''} lable icon`}><img src={Sub} alt='subject' width='50%' height='50%'></img></label>
                        <input value={formData.subject} onChange={gotError ? handleChangeError : handleChange} type="text" className={`${error.subject ? 'error' : ''} form-input`} id="subject" name="subject" placeholder='Subject of the project*' onFocus={focus} onBlur={unfocus} />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-details'>
                        <label htmlFor="details" id={lable === 'details' ? 'lable-border' : ''} className={`${error.details ? 'error' : ''} lable icon`}><img src={Details} alt='details' width='50%' height='50%'></img></label>
                        <textarea value={formData.details} onChange={gotError ? handleChangeError : handleChange} type="tex" className={`${error.details ? 'error' : ''} form-input text-area`} id="details" name="details" placeholder='Describe your project*' onFocus={focus} onBlur={unfocus} />
                    </div>
                </div>


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
                    <a className='insta-link round icon' href="/#">
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