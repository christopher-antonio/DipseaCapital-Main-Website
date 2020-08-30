import Head from 'next/head';
import { useEffect } from 'react';

import PageHeading from '../shared/PageHeading';
import Aos from 'aos';
import Footer from '../shared/Footer';
import List from '../components/PhilosophyPage/List';
import * as ListContent from '../components/PhilosophyPage/ListDetails'

const highlights = () => {

    const headDetail = {
        subtitle: 'Fund Highlights',
        heading: 'High Quality Returns'
    };

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <div className="container">
            <Head>
                <title>Philisophy - Dipsea Capital</title>
                <link rel="icon" href="/dipseaicon.jpg" />
                <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
            </Head>
            <main>
                <PageHeading head={ headDetail } />
                <div className='highlights' id='firm-section'>
                    <div className='highlights-sub'>
                        <div className='headline'>
                            <div className='highlights-line fade-in'></div>
                            <h4 data-aos='fade-right'>Highlights</h4>
                        </div>
                    </div>
                    <div className='firm-content'>
                        {/* <h2 className='sub-heading' data-aos='fade-up'>Lorem ipsum</h2> */}
                        <div className='ul'>
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent5 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent6 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent7 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent8 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent9 } />
                            <div className='list-line' data-aos='fade-up'></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx>
                {
                    `
                    .highlights {
                        height: calc(100vw * 14 / 13 + 0px);
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        background-image: linear-gradient(#e6eefe, #e6eefe);
                        background-repeat: no-repeat;
                        background-size: calc(100vw * 0.8 + 0px) calc(100vw * 9 / 13 + 370px);
                        background-position: calc(100vw / 6 + 0px) calc(100vw * 13 / 420 + 0px);
                    }

                    .highlights {
                        height: calc(100vw * 16 / 13 + 80px);;
                        padding-top: 190px;
                        align-items: flex-start;
                        background-image: linear-gradient(#e6eefe, #e6eefe);
                        background-repeat: no-repeat;
                        background-size: calc(100vw * 0.8 + 0px) calc(100vw * 120 / 131 + 250px);
                        background-position: calc(100vw / 21 + 0px) calc(100vw * 3 / 70 + 0px);
                    }
              
                    .highlights-sub {
                        height: 80%;
                        width: 20%;
                    }
            
                    .line {
                        height: 3px;
                        width: calc(100vw * 9 / 70 + 0px);
                        background-color: #4E638C;
                        margin-left: 2rem;
                    }

                    .highlights-line {
                        height: 3px;
                        width: calc(100vw * 9 / 70 + 0px);
                        background-color: #4E638C;
                    }

                    .highlights-sub h4 {
                        margin: 0;
                        padding: 1rem 2rem 2rem 0;
                        font-size: calc(100vw * 0.014 + 0px);
                    }
            
                    .firm-content {
                        height: 80%;
                        width: 55%;
                    }

                    .sub-heading {
                        font-family: 'Prata', serif;
                        font-size: calc(100vw * 4 / 131 + 3px);
                        margin: 0;
                        color: #283348;
                        width: 80%;
                    }

                    .ul {
                        margin-top: 2rem;
                    }

                    .list-line {
                        height: 2px;
                        width: 100%;
                        background-color: #8EB3FD;
                        margin: calc(100vw * 3 / 175 + 0px) 0;
                    }

                    @media (max-width: 376px) {

                        .firm {
                            align-items: flex-start;
                            padding-top: 50px;
                            margin-top: 20px;
                        }

                        .firm, .highlights {
                            height: 760px;
                            background-size: calc(100vw * 0.8 + 0px) calc(100vw * 9 / 13 + 410px);
                        }

                        .highlights {
                            padding-top: 40px;
                            background-size: calc(100vw * 0.8 + 0px) calc(100vw * 120 / 131 + 330px);
                        }

                        .line {
                            height: 2px;
                            margin-left: 1rem;
                        }

                        .sub-heading {
                            font-size: 18px;
                        }

                        
                        .firm-sub h4 {
                            padding: 0.2rem 2rem 2rem 1rem;
                            font-size: 7px;
                        }
                        
                        .highlights-line {
                            height: 2px;
                        }

                        .highlights-sub h4 {
                            padding: 0.2rem 2rem 2rem 0;
                            font-size: 7px;
                        }

                        .ul {
                            margin-top: 0.7rem;
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
    )
}

export default highlights
