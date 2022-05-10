import Head from 'next/head';
import React, { useEffect } from 'react';

// Components
import PageHeading from '../shared/PageHeading';
import Footer from '../shared/Footer';
import Individual from '../components/TeamPage/Individual';
import MetaTag from '../shared/MetaTag';
import * as TeamMember from '../components/TeamPage/TeamDetails';

// Animations
import Aos from 'aos';

const Team = () => {

    // Configure the header of the page here
    const headDetail = {
        subtitle: 'Our Team',
        heading: 'Experience & stewardship'
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
                <MetaTag />
            </Head>
            <main>
                <PageHeading head={ headDetail } />
                <div className='the-team fade-in'>
                    <div className='intro'>Meet our team, combining multiple decades of experience in generating absolute returns</div>
                </div>
                <div className='space-top'></div>
                <div className='indy-mem'>
                    <Individual employee={ TeamMember.Employee1 } />
                    <Individual employee={ TeamMember.Employee3 } />
                    <Individual employee={ TeamMember.Employee4 } />
                    <Individual employee={ TeamMember.Employee5 } />
                    <Individual employee={ TeamMember.Employee6 } />
                    <Individual employee={ TeamMember.Employee7 } />
                </div>
            </main>
            <div className='space-bottom'></div>
            <Footer />

            {/* Styling for this page here */}
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

                      @media (max-width: 541px) {

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

export default Team;
