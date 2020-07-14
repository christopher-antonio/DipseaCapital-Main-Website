import Head from 'next/head';
import { useEffect } from 'react';

import PageHeading from '../shared/PageHeading';
import Aos from 'aos';
import Footer from '../shared/Footer';

const about = () => {

    const headDetail = {
        subtitle: 'About Us',
        heading: 'Evolution and endurance'
    };

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <div className="container">
            <Head>
                <title>About - Dipsea Capital</title>
                <link rel="icon" href="/dipseaicon.jpg" />
                <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
            </Head>
            <main>
                <PageHeading head={ headDetail } />
                <div className='firm' id='firm-section'>
                    <div className='firm-sub'>
                        <div className='headline'>
                            <div className='line fade-in'></div>
                            <h4 data-aos='fade-right'>Our firm</h4>
                        </div>
                    </div>
                    <div className='firm-content'>
                        <h2 className='sub-heading' data-aos='fade-up'>Established to provide consistent returns in all market environments</h2>
                        <p className='about-1' data-aos='fade-up' data-aos-delay={ 300 }>Dipsea Capital manages liquid hedged investment strategies using systematic tools combined with discretionary portfolio management. Founder and CIO Chris Antonio’s investment approach is based on his formative experience in the late 80s and early 90s as a Pacific Stock Exchange specialist and co-manager of Paine Webber’s equity floor trading operations, seeking consistent daily profitability based on equity market inefficiencies</p>
                        <p className='about-1' data-aos='fade-up'>Chris has been an independent portfolio manager since 1995 and established Dipsea Capital, LLC in 2007, followed by the Dipsea Capital Fund, LP in 2015</p>
                        <div className='cards'>
                            <div className='card' data-aos='fade-up'>
                                <div className='hook'>No Negative Year</div>
                                <div className='hook-desc'>since 1995</div>
                            </div>
                            <div className='card' data-aos='fade-up' data-aos-delay={ 200 } >
                                <div className='hook'>87 +</div>
                                <div className='hook-desc'>year combined trading experience</div>
                            </div>
                            <div className='card' data-aos='fade-up' data-aos-delay={ 400 }>
                                <div className='hook'>16 +</div>
                                <div className='hook-desc'>year managed investment strategies</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='begin' id='firm-section'>
                    <div className='firm-sub'>
                        <div className='headline'>
                            <div className='line fade-in'></div>
                            <h4 data-aos='fade-right'>Beginning</h4>
                        </div>
                    </div>
                    <div className='firm-content'>
                        <h2 className='sub-heading' data-aos='fade-up'>Where it all begins...</h2>
                        <p className='about-1' data-aos='fade-up'>Dipsea Capital is a California Registered Investment Advisor and offers both a private fund, Dipsea Capital Fund, LP, as well as separately managed accounts for large institutional investors</p>
                        <p className='about-1' data-aos='fade-up'>Dipsea Capital is named after America’s oldest trail race, the Dipsea Race. Established in 1905, the Dipsea Race takes place in California between Mill Valley and Stinson Beach - a grueling event that rewards perseverance, teamwork, and preparation</p>
                        <div className='old-trace' data-aos='fade-up'><img src='/DipseaTrace.png' alt='Dipsea Capital Trace' /></div>
                    </div>
                </div>
            </main>
            <div data-aos='fade-up'><Footer /></div>
            <style jsx>
                {
                    `
                    .container {
                        height: 100vh;
                        width: 100%;
                    }

                    .firm, .begin {
                        height: 100vh;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                    }
              
                    .firm-sub {
                        height: 80%;
                        width: 30%;
                    }
            
                    .line {
                        height: 3px;
                        width: 180px;
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

                    .sub-heading {
                        font-family: 'Prata', serif;
                        font-size: 50px;
                        margin: 0;
                        color: #283348;
                        width: 80%;
                    }

                    .about-1 {
                        font-size: 19px;
                        line-height: 45px;
                        font-weight: 300;
                    }

                    .cards {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        height: 30%;
                        width: 120%;
                        transform: translateX(-10%);
                    }

                    .card {
                        height: 100%;
                        width: 33%;
                    }

                    .hook {
                        font-size: 50px;
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
                        font-size: 17px;
                        font-weight: 300;
                    }

                    .old-trace {
                        height: 60%;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .old-trace img {
                        height: 90%;
                        width: auto;
                    }

                    .fade-in {
                        animation: fadeIn 0.70s ease-in;
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
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
