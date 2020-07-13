import Link from 'next/link';
import { useRouter } from 'next/router';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const Navbar = ( props ) => {
    const router = useRouter();

    return (
        <React.Fragment>
            <nav className='nav'>
                <div className='toggle-button'><DrawerToggleButton click={ props.click } /></div>
                <div className='space'></div>
                <Link href='/'><a className='logo'><img src='/DipseaLogo.png' alt='homepage logo' /></a></Link>
                <div className='space'></div>
                <div className='client-login'>Client Login</div>
            </nav>
            <style jsx>
                {
                    `
                    .nav {
                        width: 100%;
                        height: 78px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        background-color: transparent;
                    }

                    .toggle-button {
                        padding-left: 1rem;
                    }

                    .logo {
                        background-color: white;
                        border-radius: 5px;
                    }

                    .logo img {
                        height: 60px;
                        width: auto;
                        cursor: pointer;
                        border-radius: 5px;
                    }

                    .client-login {
                        padding-right: 1rem;
                        color: white;
                        font-size: 18px;
                        cursor: pointer;
                    }

                    .space {
                        flex: 1;
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        .nav {
                            font-size: 9pt;
                        }
                        
                        .pages {
                            width: 50%;
                        }

                        .main-buttons {
                            display: none;
                        }

                        .tg-button {
                            visibility: visible;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                        .nav {
                            font-size: 9pt;
                        }

                        .pages {
                            width: 50%;
                        }

                        .tg-button {
                            visibility: visible;
                        }
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                        .nav {
                            font-size: 10pt;
                        }
                        .tg-button {
                            visibility: visible;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Navbar;
