import Head from 'next/head';
import { useEffect } from 'react';

// Components
import PageHeading from '../shared/PageHeading';
import Footer from '../shared/Footer';
import Card from '../components/PublicationPage/Card';
import MetaTag from '../shared/MetaTag';
import * as Info from '../components/PublicationPage/CardDetails';

// Animation
import Aos from 'aos';

const publications = () => {

    // Configure the header of the page here
    const headDetail = {
        subtitle: 'Insights',
        heading: 'Latest articles'
    };

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <div className="container">
            <Head>
                <title>Insights - Dipsea Capital</title>
                <link rel="icon" href="/dipseaicon.jpg" />
                <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
                <MetaTag />
            </Head>
            <main>
                <PageHeading head={ headDetail } />
                <div className='main-sub'>
                        <Card content={ Info.card2 } delay={ 200 } />
                        <Card content={ Info.card3 } delay={ 0 } />
                        <Card content={ Info.card1 } delay={ 200 } />
                </div>
                <div className='spacing'></div>
            </main>
            <Footer />

            {/* Styling for this page here */}
            <style jsx>
                {
                    `
                    .main-sub {
                        // height: 100vh;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin-top: calc(100vw * 4 / 131 + 0px);
                    }

                    .sub-left, .sub-right {
                        height: 80%;
                        width: 40%;
                        margin: 0 calc(100vw * 3 / 131 + 0px);
                    }

                    .spacing {
                        height: 100px;
                        width: 100%;
                    }

                    @media (max-width: 541px) {
                        .main-sub {
                            height: auto;
                            flex-direction: column;
                            align-items: center;
                        }

                        .sub-left, .sub-right {
                            height: 70%;
                            width: 80%;
                            margin: 0;
                        }

                        .spacing {
                            height: 70px;
                            width: 100%;
                        }
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

export default publications;
