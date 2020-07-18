import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaMediumM } from 'react-icons/fa';
import { useEffect } from 'react';

const Footer = () => {

    const goTo = () => {
        window.open( 'https://www.google.com/maps/place/Dipsea+Capital/@37.9452467,-122.5241261,17z/data=!3m1!4b1!4m5!3m4!1s0x80859a446de34fc3:0xb0b6faf3b01150f5!8m2!3d37.9452467!4d-122.5219374' );
    };

    const goLinkedIn = () => {
        window.open('https://www.linkedin.com/company/dipsea-capital-llc/')
    }
    return (
        <div className='footer' data-aos='fade-up'>
            <div className='dipsea-side'>
                <img src='/DipseaLogo.png' alt='dipsea logo' />
                <div className='address'>
                    <p>350 Bon Air Center</p>
                    <p>Suite 230</p>
                    <p>Greenbrae, CA 94904</p>
                </div>
                <div className='direction' onClick={ goTo }>Get directions</div>
                <div className='number'>+1 (415) 925-9022</div>
                <div className='icons'>
                    <div className='linkedin' onClick={goLinkedIn}><FaLinkedinIn color="#283348" size={ 'calc(100vw * 2 / 131 + 0px)' } /></div>
                    <div className='twitter' onClick={goLinkedIn}><FaTwitter color="#283348" size={ 'calc(100vw * 2 / 131 + 0px)' } /></div>
                    <div className='medium' onClick={goLinkedIn}><FaMediumM color="#283348" size={ 'calc(100vw * 2 / 131 + 0px)' } /></div>
                </div>
            </div>
            <div className='pages-side'>
                <div className='line'></div>
                <div className='menus'>
                    <Link href='/about'><a>About Us</a></Link>
                    <Link href='/team'><a>Our Team</a></Link>
                    <Link href='/philosophy'><a>Investment Philosophy</a></Link>
                    <Link href='/publications'><a>Publications</a></Link>
                    {/* <Link href='/'><a>Contact Us</a></Link> */}
                </div>
            </div>
            <style jsx>
                {
                    `
                    .footer {
                        height: calc(100vw * 52 / 131 + 0px);
                        width: 100%;
                        background-color: #283348;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                    }

                    .dipsea-side {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        height: 80%;
                        width: 30%;
                        padding-left: 2rem;
                    }

                    img {
                        background-color: white;
                        height: calc(100vw * 20 / 131 + 0px);
                        width: calc(100vw * 20 / 131 + 0px);
                    }

                    .address {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        padding-top: 1rem;
                    }

                    .address p {
                        font-size: calc(100vw * 0.009 + 3px);
                    }

                    .dipsea-side p {
                        color: white;
                        margin: 0;
                        padding-top: 3px;
                    }

                    .direction {
                        padding-top: 8px;
                        color: #8EB3FD;
                        font-size: calc(100vw * 0.009 + 3px);
                        cursor: pointer;
                    }

                    .number {
                        padding: calc(100vw * 23 / 1400 + 0px) 0;
                        color: white;
                        font-size: calc(100vw * 0.009 + 1px);
                    }

                    .icons {
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    .linkedin, .twitter, .medium {
                        height: calc(100vw * 7 / 262 + 3px);
                        width: calc(100vw * 7 / 262 + 3px);
                        background-color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 35px;
                        cursor: pointer;
                        margin-right: 1rem;
                    }

                    .pages-side {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        height: 80%;
                        width: 45%;
                    }

                    .line {
                        height: 3px;
                        width: 100%;
                        background-color: white;
                        margin-bottom: calc(100vw / 35 + 0px);
                    }

                    .menus {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;   
                    }

                    .menus a {
                        padding: calc(100vw / 70 + 0px) 0;
                        color: white;
                        text-decoration: none;
                        font-size: calc(100vw * 0.0114 + 0px);
                    }

                    @media (max-width: 376px) {
                        .footer {
                            height: 250px;
                        }

                        .pages-side {
                            padding-left: 10px;
                        }

                        .dipsea-side {
                            padding-left: 10px;
                        }

                        .icons {
                            margin-top: 10px;
                        }

                        .menus a {
                            font-size: 8px;
                        }

                        .address p {
                            font-size: 8px;
                        }

                        .direction, .number {
                            font-size: 7px;
                        }

                    }
                    `
                }
            </style>
        </div>
    );
};

export default Footer;
