import React from 'react'
import emailjs from 'emailjs-com';

function Confirm(props) {

    const save = () => {
        emailjs.send(
        'service_iul2d9g',
        'template_la6ubg5',
        props.data,
        'iTz5sIdnD7Aw7hTst'
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

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

    return (
        <div className='submit-review'>
            <div className='confirm-box'>
                <div className='confirm-user'>
                    <p>Hi <i>{props.data.name},</i></p>
                    <p>We will contact you on below given mobile number/E-Mail id. Make sure you entered correct details</p>
                    <p>Mobile : <i>{props.data.mobile}</i></p>
                    <p>E-Mail : <i>{props.data.email}</i></p>
                </div>
                <div className='confirm-btn-hd'>
                    <div className='btn send' onClick={save}>
                        Send
                    </div>
                    <div className='btn edit' onClick={edit}>
                        Edit
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm