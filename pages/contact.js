import Head from 'next/head';
import { useEffect, useState } from 'react';

// Components
import PageHeading from '../shared/PageHeading';
import Footer from '../shared/Footer';
import MetaTag from '../shared/MetaTag';
import emailjs from 'emailjs-com';

// Animation
import Aos from 'aos';

const Contact = () => {

    // Configure the header of the page here
    const headDetail = {
        subtitle: 'Learn more',
        heading: 'Contact us for more information!'
    };

    // Saving the values of the form
    const [ email, setEmail ] = useState( '' );
    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' );
    const [ number, setNumber ] = useState( '' );
    const [ investor, setInvestor ] = useState( 'Yes' );
    const [ message, setMessage ] = useState( '' );

    // For animation
    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    // EmailJS for sending automated emails
    const clearFileds = () => {
        setEmail( '' );
        document.getElementById('email').value = ''
        setFirstName( '' );
        document.getElementById('firstName').value = ''
        setLastName( '' );
        document.getElementById('lastName').value = ''
        setNumber( '' );
        document.getElementById('phone').value = ''
        setInvestor( 'Yes' );
        document.getElementById('investor').value = 'Yes'
        setMessage( '' );
        document.getElementById('message').value = ''
    };

    emailjs.init( 'user_QKLpa9jRQMfIvGJRnNU9x' );
    const submitForm = ( e ) => {
        // prevent form default
        e.preventDefault();

        // send it!
        emailjs.send( 'service_w0r3213', 'template_xm0f0cr', { 
            from_name: 'Dipsea Bot', 
            to_name: 'Head of Marketing', 
            email: email,
            first_name: firstName,
            last_name: lastName,
            number: number,
            investor: investor,
            message: message
         } );

        alert( 'Your message was sent to our marketing team! We will get back to you as soon as possible!' );

        clearFileds();
    };

    // Changing the values of the form
    const changeEmail = ( e ) => {
        setEmail( e.target.value );
    };
    const changeFirstName = ( e ) => {
        setFirstName( e.target.value );
    };
    const changeLastName = ( e ) => {
        setLastName( e.target.value );
    };
    const changeNumber = ( e ) => {
        setNumber( e.target.value );
    };
    const changeInvestor = ( e ) => {
        setInvestor( e.target.value );
    };
    const changeMessage = ( e ) => {
        setMessage( e.target.value );
    };

    return (
        <div className="container">
            <Head>
                <title>Contact Us - Dipsea Capital</title>
                <link rel="icon" href="/dipseaicon.jpg" />
                <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
                <MetaTag />
            </Head>
            <main>
                <PageHeading head={ headDetail } />
                {/* Dipsea Capital Map */ }
                <div className='dipsea-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.36550171785!2d-122.52412608459578!3d37.9452509101058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a446de34fc3%3A0xb0b6faf3b01150f5!2sDipsea%20Capital!5e0!3m2!1sen!2sus!4v1598818482193!5m2!1sen!2sus" style={ {border: 0, height: '100%', width: '100%' } } allowFullScreen="" aria-hidden="false" tabIndex="0" ></iframe>
                </div>
                <h1>Prospective Clients</h1>

                {/* Form Section */ }
                <form onSubmit={ submitForm }>
                    {/* Email input */ }
                    <p>Email Address <br />
                        <input type='email' name='email' id='email' placeholder='email@address.com' required={ true } onChange={ changeEmail } />
                    </p>

                    {/* Firstname Input */ }
                    <p>First Name <br />
                        <input type='text' name='firstName' id='firstName' placeholder='John' required={ true } onChange={ changeFirstName } />
                    </p>

                    {/* Lastname Input */ }
                    <p>Last Name <br />
                        <input type='text' name='lastName' id='lastName' placeholder='Doe' required={ true } onChange={ changeLastName } />
                    </p>

                    {/* Phone number Input */ }
                    <p>Phone Number <br />
                        <input type='tel' name='phone' id='phone' required={ true } placeholder='123-456-7890' onChange={ changeNumber } />
                    </p>

                    {/* Investor Choice */ }
                    <label htmlFor="investor">Accredited Investors?</label>
                    <select id="investor" name="investor" onChange={ changeInvestor }>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    {/* Message Input */ }
                    <p>Message <br />
                        <textarea name='message' id='message' onChange={ changeMessage }></textarea>
                    </p>

                    {/* Submit Button */ }
                    <input type="submit" value='Send' id='submit' />
                </form>
                <div className='bottom-space'></div>
            </main>
            <Footer />

            {/* Styling for this page here */ }
            <style jsx>
                {
                    `
                    .container {
                        background-color: rgba(0,0,0,0.01);
                    }

                    main {
                        height: auto;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center:
                    }

                    .dipsea-map {
                        width: 60%;
                        height: 30%;
                        margin-top: 5%;
                    }

                    main h1 {
                        font-family: 'Prata', serif;
                        width: 60%;
                        height: auto;
                        color: #7EA0E2;
                        font-size: calc(100vw * 48 / 1310 + 0px);
                        margin: 2% 0 3% 0;
                    }

                    form {
                        height: auto;
                        width: 60%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        color: #fff;
                        padding: 2% 0 0 0;
                        background-color: #7EA0E2;
                        border-radius: 1%;
                    }

                    form p, label {
                        height: auto;
                        width: 100%;
                        margin: 0 0 0 10%;
                        padding: 2% 0 0 0;
                        font-size: calc(100vw * 18 / 1310 + 0px);
                    }

                    select {
                        margin: 2% 0 3% 10%;
                        padding: 1%;
                        color: #fff;
                        background-color: #283348;
                        font-size: calc(100vw * 18 / 1310 + 0px);
                        cursor: pointer;
                        border-radius: 7px;
                    }

                    input {
                        width: 50%;
                        margin: 2% 0 3% 0;
                        font-size: calc(100vw * 18 / 1310 + 0px);
                        padding: 1%;
                        border-radius: 7px;
                        border: none;
                    }

                    textarea {
                        height: 10vh;
                        width: 80%;
                        margin: 2% 0 0 0;
                        padding: 1%;
                        border-radius: 7px;
                        border: none;
                        font-size: calc(100vw * 18 / 1310 + 0px);
                    }

                    #submit {
                        width: auto;
                        margin: 4% 0 4% 10%;
                        border: none;
                        background-color: #283348;
                        color: white;
                        padding: 2%;
                        border-radius: 7px;
                        cursor: pointer;
                        transition: all 0.25s ease-in-out;
                    }

                    #submit:hover {
                        background-color: #f9bc06;
                    }

                    .bottom-space {
                        height: 8rem;
                        max-height: 130px;
                        width: 100%;
                    }

                    @media (max-width: 541px) {

                        .dipsea-map {
                            width: 90%;
                        }

                        main h1 {
                            width: 90%;
                            font-size: 20px;
                            margin: 20px 0;
                        }

                        form {
                            width: 90%;
                        }

                        form p, label {
                            width: 80%;
                            font-size: 14px;
                        }

                        select {
                            font-size: 14px;
                            padding: 3%;
                        }

                        input {
                            width: 80%;
                            font-size: 14px;
                            padding: 3%;
                        }
                        
                        textarea {
                            font-size: 14px;
                            height: 15vh;
                            width: 100%;
                            padding: 3%;
                        }

                        .bottom-space {
                            height: 50px;
                        }
                    }

                    `
                }
            </style>
            <style jsx global>{ `
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }

                
                @import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');
            `}</style>
        </div>
    );
};

export default Contact;