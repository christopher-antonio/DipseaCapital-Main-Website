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
                            <p>PHILOSOPHY</p>
                        </a>
                    </Link>
                    <Link href='/publications'>
                        <a className='clickable'>
                            <p>PUBLICATIONS</p>
                        </a>
                    </Link>
                    <Link href='/contact'>
                        <a className='clickable'>
                            <p>CONTACT US</p>
                        </a>
                    </Link>
                </ul>
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
                        width: 60%;
                        max-width: 320px;
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
                        padding: 5rem 0 0 0;
                    }
                    
                    .sideDrawer a {
                        color: white;
                        font-weight: 250;
                        padding: 1rem 0 1rem 3rem;
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
                    }

                    .clickable p:hover {
                        border-bottom: 3px solid #8EB3FD;
                        transition: border-bottom 0.3s;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default SideDrawer;