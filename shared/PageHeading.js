import Navbar from '../shared/Navbar';
import { useState } from 'react';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop';

const PageHeading = ( props ) => {
    const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

    let backdrop;
    if ( sideDrawerOpen ) {
        backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
    }

    return (
        <React.Fragment>
            <div className='page-header'>
                <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
                <SideDrawer show={ sideDrawerOpen } />
                { backdrop }
                <div className='title'>
                    <h4 className='subtitle'>{ props.head.subtitle }</h4>
                    <div className='heading'>{ props.head.heading }</div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .page-header {
                        height: calc(100vw * 25 / 131 + 90px);
                        width: 100%;
                        background-color: #7EA0E2; 
                    }

                    .title {
                        height: 70%;
                        width: 90%;
                    }

                    .subtitle {
                        font-size: calc(100vw * 9 / 655 + 0px);
                        padding: calc(100vw * 14 / 655 + 0px) 0 0 calc(100vw * 17 / 262 + 0px);
                        color: white;
                    }

                    .heading {
                        display: flex;
                        height: auto;
                        width: 85%;
                        white-space: nowrap;
                        overflow: hidden;
                        font-family: 'Prata', serif;
                        color: white;
                        font-size: calc(100vw * 0.05 + 0px);
                        padding: calc(100vw * 1 / 131 + 0px) 0 0 calc(100vw * 17 / 262 + 0px);
                    }

                    @media (max-width: 376px) {
                        .subtitle {
                            font-size: 9px;
                            padding: 0 0 0 30px;
                        }

                        .heading {
                            padding: calc(100vw * 1 / 131 + 0px) 0 0 30px;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default PageHeading;
