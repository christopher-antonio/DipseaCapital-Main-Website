import Head from 'next/head';
import Navbar from '../shared/Navbar';
import { useState } from 'react';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop';

const about = () => {
    const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

    let backdrop;
    if ( sideDrawerOpen ) {
        backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
    }

    return (
        <div className="container">
            <Head>
                <title>About - Dipsea Capital</title>
                <link rel="icon" href="/dipseaicon.jpg" />
            </Head>
            <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
            <SideDrawer show={ sideDrawerOpen } />
            { backdrop }
            <main>

            </main>
            <style jsx>
                {
                    `
                    .container {
                        height: 100vh;
                        width: 100%;
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

export default about;
