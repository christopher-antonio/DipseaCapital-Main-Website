import Link from 'next/link';

const Footer = () => {
    const goTo = () => {
        window.open('https://www.google.com/maps/place/Dipsea+Capital/@37.9452467,-122.5241261,17z/data=!3m1!4b1!4m5!3m4!1s0x80859a446de34fc3:0xb0b6faf3b01150f5!8m2!3d37.9452467!4d-122.5219374')
    }
    return (
        <div className='footer'>
            <div className='dipsea-side'>
                <img src='/DipseaLogo.png' alt='dipsea logo' />
                <div className='address'>
                    <p>350 Bon Air Center</p>
                    <p>Suite 230</p>
                    <p>Greenbrae, CA 94904</p>
                </div>
                <div className='direction' onClick={goTo}>Get directions</div>
                <div className='number'>+1 (415) 925-9022</div>
            </div>
            <div className='pages-side'>
                <div className='line'></div>
                <div className='menus'>
                    <Link href='/'><a>About Us</a></Link>
                    <Link href='/'><a>Our Team</a></Link>
                    <Link href='/'><a>Investment Philosophy</a></Link>
                    <Link href='/'><a>Publications</a></Link>
                    <Link href='/'><a>Contact Us</a></Link>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .footer {
                        height: 520px;
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
                        height: 200px;
                        width: 200px;
                    }

                    .address {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        padding-top: 1rem;
                    }

                    .dipsea-side p {
                        color: white;
                        margin: 0;
                        padding-top: 3px;
                    }

                    .direction {
                        padding-top: 8px;
                        color: #8EB3FD;
                        font-size: 17px;
                        cursor: pointer;
                    }

                    .number {
                        padding: 1.5rem 0;
                        color: white;
                        font-size: 450;
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
                        margin-bottom: 2rem;
                    }

                    .menus {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;   
                    }

                    .menus a {
                        padding: 1rem 0;
                        color: white;
                        text-decoration: none;
                    }
                    `
                }
            </style>
        </div>
    );
};

export default Footer;
