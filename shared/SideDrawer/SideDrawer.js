import Link from 'next/link';

const SideDrawer = props => {
    let drawerClasses = [ 'sideDrawer' ];
    if ( props.show ) {
        drawerClasses.push( 'open' );
    }

    return (
        <React.Fragment>
            <nav className={ drawerClasses.join( ' ' ) }>
                <ul>
                    <Link href='/'>
                        <a className='clickable'>
                            <p>HOME</p>
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a className='clickable'>
                            <p>ABOUT US</p>
                        </a>
                    </Link>
                    <Link href='/team'>
                        <a className='clickable'>
                            <p>OUR TEAM</p>
                        </a>
                    </Link>
                    <Link href='/philosophy'>
                        <a className='clickable'>
                            <p>INVESTMENT PHILOSOPHY</p>
                        </a>
                    </Link>
                    <Link href='/highlights'>
                        <a className='clickable'>
                            <p>FUND HIGHLIGHTS</p>
                        </a>
                    </Link>
                    <Link href='/publications'>
                        <a className='clickable'>
                            <p>INSIGHTS</p>
                        </a>
                    </Link>
                    <a href='http://eepurl.com/g_QvTb' className='clickable' target='_blank'>
                        <p>CONTACT US</p>
                    </a>
                </ul>
                <div className='logo'>
                    {/* <img src='/SideDrawerLogo.png' alt='Dipsea Capital, LLC Logo' /> */}
                    <img src='DipseaLogo.png' alt='Dipsea Capital, LLC Logo' />
                </div>
                
            </nav>
            <style jsx>
                {
                    `
                    .sideDrawer {
                        height: 100%;
                        background-color: #3E4E6E;
                        box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 30vw;
                        z-index: 200;
                        transform: translateX(-100%);
                        transition: transform 0.3s ease-in-out;
                    }
                    
                    .open {
                        transform: translateX(0) !important;
                    }
                    
                    .sideDrawer ul {
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        margin: 0;
                        padding: 5rem 0 0 10%;
                    }
                    
                    .sideDrawer a {
                        color: white;
                        font-weight: 250;
                        padding: 1rem 0 1rem 10%;
                    }
                    
                    .clickable {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        color: #04c2c9;
                        text-decoration: none;
                        cursor: pointer;
                    }

                    .clickable p {
                        margin: 0;
                        padding-bottom: 6px;
                        font-size: max(calc(100vw * 14 / 1450 + 2px), 12px);
                    }

                    .clickable p:hover {
                        border-bottom: 3px solid #8EB3FD;
                        transition: border-bottom 0.3s;
                    }

                    // .logo {
                    //     height: auto;
                    //     width: 18vw;
                    //     margin: 22% 0 0 17%;                        
                    // }

                    // .logo img {
                    //     height: auto;
                    //     width: 100%;
                    //     background-color: white;
                    // }
                    .logo {
                        height: auto;
                        width: calc(100vw * 16 / 131 + 0px);
                        padding: 12px 0;
                        margin: 15% 0 0 17%;
                        background-color: #fff;
                    }

                    .logo img {
                        background-color: white;
                        height: auto;
                        width: calc(100vw * 16 / 131 + 0px);
                    }

                    @media (max-width: 451px) {
                        .sideDrawer {
                            width: 70vw;
                        }
                        .clickable p { 
                            font-size: 12px;
                        }

                        .logo {
                            padding: 6px 0;
                            width: 80px;
                        }

                        .logo img {
                            background-color: white;
                            height: auto;
                            width: 80px;
                        }
                    }

                    // .logo {
                    //     display: flex;
                    //     height: 13vh;
                    //     margin: 8rem 0 0 6rem;
                    //     font-family: 'Playfair Display', serif;
                    //     color: white;
                    //     font-size: 30px;
                    //     font-weight: 600;
                    //     letter-spacing: 2px;
                    // }

                    // .tilted {
                    //     padding: 0 2px 0 4px;
                    //     transform: rotate(20deg) translateX(-15px) translateY(3px);
                    // }

                    // .logo img {
                    //     height: 100%;
                    //     width: auto;
                    //     background-color: white;
                    // }

                   


                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default SideDrawer;