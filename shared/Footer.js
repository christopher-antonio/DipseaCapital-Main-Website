import Link from 'next/link';

// Icons
import { FaLinkedinIn, FaTwitter, FaMediumM } from 'react-icons/fa';

const Footer = () => {

    const goTo = () => {
        window.open( 'https://www.google.com/maps/place/Dipsea+Capital/@37.9452467,-122.5241261,17z/data=!3m1!4b1!4m5!3m4!1s0x80859a446de34fc3:0xb0b6faf3b01150f5!8m2!3d37.9452467!4d-122.5219374' );
    };

    const goLinkedIn = () => {
        window.open( 'https://www.linkedin.com/company/dipsea-capital-llc/' );
    };

    const goTwitter = () => {
        window.open( 'https://twitter.com/dipseacapital' );
    };

    const goMedium = () => {
        window.open( 'https://medium.com/@dipsea_30709' );
    };
    return (
        <div className='footer'>
            <div className='dipsea-side'>
                <div className='logo-img'>
                    <img src='/DipseaLogo.png' alt='dipsea logo' />
                </div>
                <div className='address'>
                    <p>350 Bon Air Center</p>
                    <p>Suite 230</p>
                    <p>Greenbrae, CA 94904</p>
                </div>
                <div className='direction' onClick={ goTo }>Get directions</div>
                <div className='number'>+1 (415) 925-9022</div>
                <div className='icons'>
                    <div className='linkedin' onClick={ goLinkedIn }><FaLinkedinIn color="#283348" size={ 'calc(100vw * 1 / 131 + 8px)' } /></div>
                    <div className='twitter' onClick={ goTwitter }><FaTwitter color="#283348" size={ 'calc(100vw * 1 / 131 + 8px)' } /></div>
                    <div className='medium' onClick={ goMedium }><FaMediumM color="#283348" size={ 'calc(100vw * 1 / 131 + 8px)' } /></div>
                </div>
            </div>
            {/* <div className='dipsea-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.36550171785!2d-122.52412608459578!3d37.9452509101058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a446de34fc3%3A0xb0b6faf3b01150f5!2sDipsea%20Capital!5e0!3m2!1sen!2sus!4v1598818482193!5m2!1sen!2sus" frameBorder='0' style={{border:0, height:'calc(100vw * 44 / 151 + 0px)', width:'100%'}} allowFullScreen="" aria-hidden="false" tabIndex="0" ></iframe>
            </div> */}
            <div className='pages-side'>
                <div className='line'></div>
                <div className='menu-option'>
                    <div className='menus'>
                        <Link href='/'><a>Home</a></Link>
                        <Link href='/about'><a>About Us</a></Link>
                        <Link href='/team'><a>Our Team</a></Link>
                        <Link href='/philosophy'><a>Investment Philosophy</a></Link>
                    </div>
                    <div className='menus'>
                        <Link href='/highlights'><a>Fund Highlights</a></Link>
                        <Link href='/publications'><a>Insights</a></Link>
                        <Link href='/community'><a>Giving Back</a></Link>
                        <Link href='/contact'><a>Contact Us</a></Link>
                    </div>
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
                        justify-content: flex-start;
                        height: 80%;
                        width: 30%;
                        padding-left: 2rem;
                    }

                    .logo-img {
                        padding: 12px 0;
                        background-color: #fff;
                    }

                    img {
                        background-color: white;
                        height: calc(100vw * 18 / 131 + 0px);
                        width: calc(100vw * 18 / 131 + 0px);
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
                        width: 50%;
                        margin-left: 5%;
                    }

                    .line {
                        height: 3px;
                        width: 100%;
                        background-color: white;
                        margin-bottom: calc(100vw / 35 + 0px);
                    }

                    .menu-option {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: center;
                    }

                    .menus {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start; 
                        margin-right: 90px;  
                    }

                    .menus a {
                        padding: calc(100vw / 90 + 0px) 0;
                        color: white;
                        text-decoration: none;
                        font-size: calc(100vw * 0.0114 + 0px);
                    }

                    .dipsea-map {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: flex-start;
                        height: 80%;
                        width: 20%;
                    }

                    @media (min-width: 542px) and (max-width: 769px) {
                        .footer {
                            height: calc(100vw * 52 / 131 + 30px);
                        }
                    }

                    @media (max-width: 541px) {
                        .footer {
                            height: 250px;
                        }

                        .pages-side {
                            padding-left: 10px;
                            width: 45%;
                        }

                        .dipsea-side {
                            padding-left: 10px;
                            width: 30%;
                        }

                        .logo-img {
                            padding: 3px 0;
                        }

                        .icons {
                            margin-top: 10px;
                            width: auto;
                        }

                        .linkedin, .twitter, .medium {
                            height: 20px;
                            width: 20px;
                            border-radius: 20px;
                            margin-right: 0.5rem;
                        }

                        .menus {
                            margin-right: 20px;
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

                        .dipsea-map {
                            display: none;
                        }
                    }
                    `
                }
            </style>
        </div>
    );
};

export default Footer;
