import Link from 'next/link';
import { useRouter } from 'next/router';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const Navbar = ( props ) => {
    const router = useRouter();

    const goTo = () => {
        window.open( 'https://www.navconsulting.net/' );
    };

    return (
        <React.Fragment>
            <nav className='nav'>
                <div className='toggle-button'><DrawerToggleButton click={ props.click } /></div>
                <Link href='/'><a className='logo'><img src='/DipseaLogo.png' alt='homepage logo' /></a></Link>
                <div className='space'></div>
                <Link href='/'><a className='dipsea-name'>DIPSEA CAPITAL</a></Link>
                <div className='space'></div>
                <div className='client-login' onClick={ goTo }>Client Login</div>
            </nav>
            <style jsx>
                {
                    `
                    .nav {
                        width: 100%;
                        height: calc(100vw * 60 / 700 + 10px);
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        background-color: transparent;
                    }

                    .toggle-button {
                        margin-left: 2%;
                    }

                    .logo {
                        background-color: white;
                        margin-left: 40px;
                        padding: 3px 0;
                    }

                    .logo img {
                        height: calc(100vw * 5 / 70 + 0px);
                        width: auto;
                        cursor: pointer;
                    }

                    .dipsea-name {
                        font-family: 'Prata', serif;
                        font-size: 40px;
                        font-weight: 600;
                        color: #fff;
                        letter-spacing: 2.2px;
                        text-decoration: none;
                    }

                    .client-login {
                        margin-right: 2%;
                        color: white;
                        font-size: calc(100vw * 9 / 700 + 3px);
                        cursor: pointer;
                    }

                    .space {
                        flex: 1;
                    }

                    @media (max-width: 376px) {
                        .nav {
                            width: 100%;
                            height: 80px;
                        }

                        .logo img {
                            height: 50px;
                        }

                        .client-login {
                            font-size: 12px;
                        }
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Navbar;
