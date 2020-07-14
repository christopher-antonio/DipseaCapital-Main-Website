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
                        height: 45vh;
                        width: 100%;
                        background-color: #7EA0E2; 
                    }

                    .title {
                        height: 70%;
                        width: 90%;
                    }

                    .subtitle {
                        padding: 2rem 0 0 5rem;
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
                        padding: 1rem 0 0 5rem;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default PageHeading;
