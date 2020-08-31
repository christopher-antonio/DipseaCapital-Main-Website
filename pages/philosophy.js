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
        heading: 'Transparency from the ground up'
    };

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <div className="container">
            <Head>
                <title>Philosophy - Dipsea Capital</title>
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
                        <img />
                    </div>
                    <div className='firm-content'>
                        {/* <h2 className='sub-heading' data-aos='fade-up'>High Quality Returns</h2> */}
                        <div className='ul'>
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent1 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent2 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent3 } />
                            <div className='list-line' data-aos='fade-up'></div>
                            <List content={ ListContent.listContent4 } />
                            {/* <div className='list-line' data-aos='fade-up'></div> */}
                        </div>
                        <div className='cards'>
                            <div className='card' data-aos='fade-up'>
                                <div className='hook'>0</div>
                                <div className='hook-desc'>correlation to stock market</div>
                            </div>
                            <div className='card' data-aos='fade-up' data-aos-delay={ 200 } >
                                <div className='hook'>0</div>
                                <div className='hook-desc'>correlation to bond indices</div>
                            </div>
                            <div className='card' data-aos='fade-up' data-aos-delay={ 400 }>
                                <div className='hook'>67 %</div>
                                <div className='hook-desc'>positive days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx>
                {
                    `
                    .firm {
                        height: calc(100vw * 10 / 13 + 70px);
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        background-image: linear-gradient(#e6eefe, #e6eefe);
                        background-repeat: no-repeat;
                        background-size: calc(100vw * 0.8 + 0px) max(calc(100vw * 16 / 23 + 0px), 780px) ;
                        background-position: calc(100vw / 6 + 0px) calc(100vw * 13 / 420 + 0px);
                    }

                    .firm-sub {
                        height: 80%;
                        width: 30%;
                    }
            
                    .line {
                        height: 3px;
                        width: calc(100vw * 9 / 70 + 0px);
                        background-color: #4E638C;
                        margin-left: 2rem;
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

                    .cards {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        height: 10%;
                        width: 120%;
                        transform: translateX(-10%);
                    }

                    .card {
                        height: 100%;
                        width: 33%;
                    }

                    .hook {
                        font-size: calc(100vw * 4 / 141 + 0px);
                        font-family: 'Prata', serif;
                        display: flex;
                        align-items: flex-end;
                        justify-content: center;
                        text-align: center;
                        height: 70%;
                        color: #7EA0E2;
                    }

                    .hook-desc {
                        height: 20%;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        font-size: max(calc(100vw * 19 / 1310 + 0px), 13px);
                        font-weight: 300;
                    }

                    .sub-heading {
                        font-family: 'Prata', serif;
                        font-size: calc(100vw * 4 / 131 + 3px);
                        margin: 0;
                        color: #283348;
                        width: 80%;
                    }

                    .ul {
                        margin-top: calc(-100vw * 3 / 175 + 0px);
                    }

                    .list-line {
                        height: 2px;
                        width: 100%;
                        background-color: #8EB3FD;
                        margin: calc(100vw * 3 / 175 + 0px) 0;
                    }

                    @media (min-width: 452px) and (max-width: 769px) {
                        .firm {
                            height: calc(100vw * 10 / 13 + 70px);
                            background-size: calc(100vw * 0.8 + 0px) calc(100vw * 100 / 131 + 0px);
                        }
                    }

                    @media (max-width: 451px) {

                        .firm {
                            align-items: flex-start;
                            padding-top: 50px;
                            margin-top: 20px;
                            height: 670px;
                            background-size: calc(100vw * 0.8 + 0px) calc(100vw * 7 / 13 + 410px);
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

                        .hook {
                            margin-bottom: 10px;
                        }

                        .hook-desc {
                            font-size: 8px;
                        }

                        .cards {
                            transform: translateX(-15%);   
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

export default philosophy;
