import Head from 'next/head';
import { useEffect } from 'react';

import PageHeading from '../shared/PageHeading';
import Aos from 'aos';
import Footer from '../shared/Footer';
import List from '../components/PhilosophyPage/List';
import * as ListContent from '../components/PhilosophyPage/ListDetails'

const philosophy = () => {

    const headDetail = {
        subtitle: 'Investment Philosophy',
        heading: 'Consistent & Non-correlated'
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
                <div className='firm' id='firm-section'>
                    <div className='firm-sub'>
                        <div className='headline'>
                            <div className='line fade-in'></div>
                            <h4 data-aos='fade-right'>Strategy</h4>
                        </div>
                    </div>
                    <div className='firm-content'>
                        <h2 className='sub-heading' data-aos='fade-up'>Lorem ipsum</h2>
                        <div className='ul'>
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent1 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent2 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent3 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent4 } />
                            <div className='list-line' data-aos='fade-up'></div>
                        </div>
                    </div>
                </div>
                <div className='highlights' id='firm-section'>
                    <div className='highlights-sub'>
                        <div className='headline'>
                            <div className='highlights-line fade-in'></div>
                            <h4 data-aos='fade-right'>Highlights</h4>
                        </div>
                    </div>
                    <div className='firm-content'>
                        <h2 className='sub-heading' data-aos='fade-up'>Lorem ipsum</h2>
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
            <div data-aos='fade-up'><Footer /></div>
            <style jsx>
                {
                    `
                    .firm, .highlights {
                        height: 1400px;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        background-image: linear-gradient(#e6eefe, #e6eefe);
                        background-repeat: no-repeat;
                        background-size: calc(100vw * 0.8 + 0px) 1300px;
                        background-position: calc(100vw / 6 + 0px) calc(100vw * 13 / 420 + 0px);
                    }

                    .highlights {
                        height: 1600px;
                        padding-top: 190px;
                        align-items: flex-start;
                        background-image: linear-gradient(#e6eefe, #e6eefe);
                        background-repeat: no-repeat;
                        background-size: calc(100vw * 0.8 + 0px) 1450px;
                        background-position: calc(100vw / 21 + 0px) calc(100vw * 3 / 70 + 0px);
                    }
              
                    .firm-sub {
                        height: 80%;
                        width: 30%;
                    }

                    .highlights-sub {
                        height: 80%;
                        width: 20%;
                    }
            
                    .line {
                        height: 3px;
                        width: 180px;
                        background-color: #4E638C;
                        margin-left: 2rem;
                    }

                    .highlights-line {
                        height: 3px;
                        width: 180px;
                        background-color: #4E638C;
                    }
            
                    .firm-sub h4 {
                        margin: 0;
                        padding: 1rem 2rem 2rem 2rem;
                        font-size: calc(100vw * 0.014 + 0px);
                    }
            
                    .firm-content {
                        height: 80%;
                        width: 55%;
                    }

                    .sub-heading {
                        font-family: 'Prata', serif;
                        font-size: 50px;
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
                        margin: 2rem 0;
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

export default philosophy;
