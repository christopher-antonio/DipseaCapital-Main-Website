import Head from 'next/head';
import { useEffect } from 'react';

// Components
import PageHeading from '../shared/PageHeading';
import Footer from '../shared/Footer';
import MetaTag from '../shared/MetaTag';

// Animation
import Aos from 'aos';

const About = () => {

    // Configure the header of the page here
    const headDetail = {
        subtitle: 'About Us',
        heading: 'Embracing adaptation'
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
                <MetaTag />
            </Head>
            <main>
                <PageHeading head={ headDetail } />
                <div className='firm-space'></div>
                <div className='quote'>
                    <em>
                        " Operating in the markets is not an effort of seeking perfection. Success arrives through a process of constant evolution
                         of our strategies supported by a robust focus on self improvement" - Christopher Antonio, CIO 
                    </em>
                </div>
                <div className='firm' id='firm-section'>

                    {/* Left side of the page */ }
                    <div className='firm-sub'>
                        <div className='headline'>
                            <div className='line fade-in'></div>
                            <h4 data-aos='fade-right'>Our firm</h4>
                            <div className='old-trace' data-aos='fade-up'><img src='/DipseaTrace.png' alt='Dipsea Capital Trace' /></div>
                        </div>
                    </div>

                    {/* Top half of the page */ }
                    <div className='firm-content'>
                        <p className='about-1' data-aos='fade-up' data-aos-delay={ 300 }>
                            Dipsea Capital manages liquid hedged investment strategies using systematic tools combined with discretionary portfolio management. 
                            Founder and CIO Chris Antonio’s investment approach is based on his scientific background combined with his experience as a Pacific Stock Exchange specialist and co-manager of Paine Webber’s equity floor trading operations. 
                            Both experiences contribute to an orientation of seeking consistent profitability based on equity market inefficiencies.
                        </p>
                        <p className='about-1' data-aos='fade-up'>
                            Chris has been an independent portfolio manager since 1995 and established Dipsea Capital, LLC in 2007, followed by the Dipsea Capital Fund, 
                            LP in 2015.</p>
                        <div className='cards'>
                            <div className='card' data-aos='fade-up' data-aos-delay={ 200 } >
                                <div className='hook'>25 +</div>
                                <div className='hook-desc'>years senior team's average experience</div>
                            </div>
                            <div className='card' data-aos='fade-up' data-aos-delay={ 400 }>
                                <div className='hook'>16 +</div>
                                <div className='hook-desc'>years as a team</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='firm-space'></div>

                {/* Second half of the page */ }
                <div className='begin' id='firm-section'>
                    <div className='firm-sub'>
                        <div className='headline'>
                            <div className='line fade-in'></div>
                            <h4 data-aos='fade-right'>The name</h4>
                        </div>
                    </div>
                    <div className='firm-content' id='firm-begin'>
                        <h2 className='sub-heading' data-aos='fade-up'>Dipsea ...</h2>
                        <p className='about-1' data-aos='fade-up'>
                            Dipsea Capital is a California Registered Investment Advisor and offers both a private fund, 
                            Dipsea Capital Fund, LP, as well as separately managed accounts for large institutional investors.
                        </p>
                        <p className='about-1' data-aos='fade-up'>
                            Dipsea Capital is named after America’s oldest trail race, the Dipsea Race. 
                            Established in 1905, the Dipsea Race takes place in California between Mill Valley and Stinson Beach 
                            - a grueling event that rewards perseverance, ingenuity, and perseverance.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />

            {/* Styling for this page here */ }
            <style jsx>
                {
                    `
                    .container {
                        height: 100vh;
                        width: 100%;
                    }

                    .firm-space {
                        height: calc(100vw * 0.09 + 0px);
                        max-height: 100px;
                        width: 100%;
                    }

                    .quote {
                        padding: 0 0 7% 0;
                        text-align: center;
                        font-size: max(calc(100vw * 0.014 + 0px), 12px);
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .quote em {
                        width: 80%;
                        font-weight: 300;
                    }

                    .firm, .begin {
                        min-height: calc(100vw * 75 / 161 + 0px);
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: center;
                    }

                    .firm-sub {
                        height: 100%;
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
                        font-size: max(calc(100vw * 0.014 + 0px), 13px);
                    }
            
                    .firm-content {
                        height: 80%;
                        width: 55%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                    }

                    .sub-heading {
                        font-family: 'Prata', serif;
                        font-size: calc(100vw * 5 / 131 + 0px);
                        margin: 0;
                        color: #283348;
                        width: 80%;
                    }

                    .about-1 {
                        font-size: max(calc(100vw * 19 / 1310 + 0px), 15px);
                        line-height: calc(100vw * 9 / 262 + 0px);
                        font-weight: 300;
                        text-align: justify;
                    }

                    .cards {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: center;
                        height: 30%;
                        width: 120%;
                        margin-top: 2%;
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

                    .old-trace {
                        height: calc(100vw * 45 / 131 + 0px);
                        width: 100%;
                        display: flex;
                        align-items: flex-start;
                        justify-content: flex-start;
                        margin-top: calc(100vw * 0.041 + 0px);
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

                    @media (max-width: 541px) {

                        .firm {
                            height: 270px;
                        }

                        .begin {
                            height: 230px;
                        }
                        
                        .firm-sub {
                            height: 80%;
                            width: 20%;
                        }

                        .firm-content {
                            height: 80%;
                            width: 70%;
                        }

                        .firm-sub h4 {
                            padding: 0.2rem 2rem 2rem 0;
                            font-size: 7px;
                        }

                        .line {
                            height: 2px;
                            width: calc(100vw * 9 / 70 + 0px);
                            background-color: #4E638C;
                            margin-left: 0;
                        }

                        .about-1 {
                            font-size: 10px;
                            line-height: calc(100vw * 9 / 262 + 0px);
                            font-weight: 300;
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

                        .old-trace img {
                            height: 75%;
                            width: auto;
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

export default About;
