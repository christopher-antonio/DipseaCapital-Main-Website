import Head from 'next/head';
import { useEffect } from 'react';

import PageHeading from '../shared/PageHeading';
import Footer from '../shared/Footer';
import Individual from '../components/TeamPage/Individual';
import Aos from 'aos';

const team = () => {
    const headDetail = {
        subtitle: 'Our Team',
        heading: 'Experience & dedication'
    };

    const Employee1 = {
        name: 'Christopher Antonio',
        position: 'Founder and Chief Investment Officer',
        desc: 'Mr. Antonio began his career on the Pacific Stock Exchange in 1985. He later co-managed the listed securities business for Paine Webber before departing, in 1995, to start his own firm and manage client monies. He established the current Investment Management Company, Dipsea Capital, LLC in 2007.  From 1995 through present, his clients have never withstood a negative return year.  Chris has a passion for research pertaining to the Science of Consistency.  Specific research interests center on the successful cultivation of an elastic mindset, peak performance similarities across multiple disciplines, and processes which encourage consistent, high efficacy decision making.  Mr. Antonio has a Bachelor’s Degree from the University of California at Davis in Biological Sciences.',
        pic: '/nchris.png'
    };

    const Employee2 = {
        name: 'Eddy Altamirano',
        position: 'Head of Trading',
        desc: "Mr. Altamirano joined Dipsea Capital in 2003 and serves as the Firm’s Head of Trading.  Eddy is actively involved in managing Dipsea's direct investment strategy. Eddy has over 25 years of experience in trading, operations, and portfolio risk management. Prior to Dipsea Capital, Eddy was a trader on the Pacific Stock Exchange Options Floor, Assistant Specialist on the Cincinnati Stock Exchange for Paine Webber, and an Assistant Specialist on the Equities Floor of the PSE. He earned his Bachelor’s degree in Economics from the University of California at Berkeley.",
        pic: '/neddy.png'
    };

    const Employee3 = {
        name: 'Kurt Romstad',
        position: 'Head of Risk Management',
        desc: "Mr. Romstad has over 20 years of risk management experience and has worked with Mr. Antonio since 1998.  Kurt has managed capital through all types of market environments and covered all types of investment products (equities, options, futures, and fixed income products). Prior to joining Dipsea Capital, Kurt managed a Paine Webber equity trading desk for eight years. Kurt earned a Bachelor of Science in Finance from the California State University at Chico.",
        pic: '/nkurt.png'
    };

    const Employee4 = {
        name: 'Jonathan Clark',
        position: 'Director of Marketing',
        desc: "Prior to joining Dipsea Capital in 2019, Jonathan researched and managed portfolios of alternative investment strategies since 2003. Most recently, he was a Vice President at Progress Investment Management in San Francisco. Prior to moving to the west coast, he was a Managing Director at one of the oldest fund-of-funds in the United States, Sandalwood Securities. Previously, he was a Vice President at HSBC Alternative Investments in New York and, before that, a Vice President and Strategy Head at Optimal (a unit of Banco Santander) in New York. Jonathan earned an MBA with honors from Columbia Business School and a Bachelor’s in Business Administration, Summa Cum Laude, from John Brown University.",
        pic: '/njonathan.png'
    };

    const Employee5 = {
        name: 'Eugene Rekhtman',
        position: 'Director of Operations',
        desc: "At Dipsea Capital, Eugene oversees all aspects of the fund’s operations and compliance. Eugene joined Dipsea in July, 2020 and has twelve years of experience in hedge fund operations at two multi-billion dollar hedge funds, a fund administrator, and a consultant. Most recently, Eugene served as an outsourced CFO to private equity and hedge fund managers with investment management consultant Constellation Advisors.  In this capacity, he advised both new and established funds on best practices for their reporting functions and back-office operations.  Prior to this, Eugene was a senior fund accountant at Passport Capital managing accounting processes for multiple hedge funds, 40 Act funds, and separate accounts.  Eugene began his career at hedge fund Parallax Volatility Advisers as a senior fund accountant with additional responsibilities in compliance and operations.  Eugene received his bachelor of science in Corporate Finance and Accounting from San Francisco State University.",
        pic: '/neugene.png'
    };

    const Employee6 = {
        name: 'Cameron Grimes',
        position: 'Trader',
        desc: 'Cameron joined Dipsea Capital in July, 2020 after serving six years as a derivatives trader for CMZ Trading, a Chicago prop trading firm. He was involved in all aspects of portfolio trading, including identifying and enhancing trading strategies and managing portfolio risk across various market environments. He also provided liquidity as a market maker in index equity options at both the Chicago Board of Trade and the Chicago Board of Options Exchange. Cameron earned his bachelor’s degree in Economics from The University of Chicago.',
        pic: '/ncameron.png'
    };

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <div className="container">
            <Head>
                <title>Our Team - Dipsea Capital</title>
                <link rel="icon" href="/dipseaicon.jpg" />
                <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
            </Head>
            <main>
                <PageHeading head={ headDetail } />
                <div className='the-team fade-in'>
                    {/* <div className='team-pic'><img src='/Team.png' alt='team picture' /></div> */}
                    <div className='intro'>Meet our team, combining over nine decades of experience in generating absolute returns</div>
                </div>
                <div className='space-top'></div>
                <div className='indy-mem'>
                    <Individual employee={ Employee1 } />
                    <Individual employee={ Employee2 } />
                    <Individual employee={ Employee3 } />
                    <Individual employee={ Employee4 } />
                    <Individual employee={ Employee5 } />
                    <Individual employee={ Employee6 } />
                </div>

            </main>
            <div className='space-bottom'></div>
            <Footer />
            <style jsx>
                {
                    `
                    .container {
                        height: 100vh;
                        width: 100%;
                    }

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

                    .heading{
                        display: flex;
                        height: auto;
                        width: 80%;
                        white-space: nowrap;
                        overflow: hidden;
                        font-family: 'Prata', serif;
                        color: white;
                        font-size: calc(100vw * 0.05 + 0px);
                        padding: 1rem 0 0 5rem;
                      }

                      .the-team {
                        background-image: linear-gradient(white, white, #e6e6e6);
                        background-repeat: no-repeat;
                        // height: calc(100vw * 60 / 256 + 0px);
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                      }

                      .intro {
                        font-family: 'Prata', serif;
                        font-size: calc(100vw * 0.014 + 0px);
                        width: 70%;
                        height: auto;
                        padding: calc(100vw * 3 / 70 + 0px) 0 0 0;
                        text-align: center;
                      }

                      .indy-mem {
                        background-image: linear-gradient(#e6e6e6, #e6e6e6);
                        background-repeat: no-repeat;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                      }

                      .fade-in {
                        animation: fadeIn 0.70s ease-in;
                      }

                      .space-bottom, .space-top {
                          height: 100px;
                          width: 100%;
                          background-color: #e6e6e6;
                      }

                      @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                      }

                      @media (max-width: 451px) {

                        .the-team {
                            height: 60px;
                        }
                        .team-pic img {
                            width: 100%;
                            height: auto;
                        }

                        .intro {
                            width: 80%;
                            font-size: 10px;
                        }

                        .space-top {
                            height: 20px;
                        }

                        .space-bottom {
                            height: 60px;
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

export default team;
