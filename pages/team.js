import Head from 'next/head';
import Navbar from '../shared/Navbar';
import { useState, useEffect } from 'react';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop';
import Footer from '../shared/Footer';
import Individual from '../components/TeamPage/individual';
import Aos from 'aos';

const team = () => {
    const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

    let backdrop;
    if ( sideDrawerOpen ) {
        backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
    }

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    const Employee1 = {
        name: 'Christopher Antonio',
        position: 'Founder and Chief Investment Officer',
        desc: 'Mr. Antonio began his career on the Pacific Stock Exchange in 1985. He later co-managed the listed securities business for Paine Webber before departing, in 1995, to start his own firm and manage client monies. He established the current Investment Management Company, Dipsea Capital, LLC in 2007.  From 1995 through present, his clients have never withstood a negative return year.  Chris has a passion for research pertaining to the Science of Consistency.  Specific research interests center on the successful cultivation of an elastic mindset, peak performance similarities across multiple disciplines, and processes which encourage consistent, high efficacy decision making.  Mr. Antonio has a Bachelor’s Degree from the University of California at Davis in Biological Sciences'
    }

    const Employee2 = {
        name: 'Eddy Altamirano',
        position: 'Head of Trading',
        desc: "Mr. Altamirano joined Dipsea Capital in 2003 and serves as the Firm’s Head of Trading.  Eddy is actively involved in managing Dipsea's direct investment strategy. Eddy has over 25 years of experience in trading, operations, and portfolio risk management. Prior to Dipsea Capital, Eddy was a trader on the Pacific Stock Exchange Options Floor, Assistant Specialist on the Cincinnati Stock Exchange for Paine Webber, and an Assistant Specialist on the Equities Floor of the PSE. He earned his Bachelor’s degree in Economics from the University of California at Berkeley"
    }

    const Employee3 = {
        name: 'Kurt Romstad',
        position: 'Head of Risk Management',
        desc: "Mr. Romstad has over 20 years of risk management experience and has worked with Mr. Antonio since 1998.  Kurt has managed capital through all types of market environments and covered all types of investment products (equities, options, futures, and fixed income products). Prior to joining Dipsea Capital, Kurt managed a Paine Webber equity trading desk for eight years. Kurt earned a Bachelor of Science in Finance from the California State University at Chico"
    }

    const Employee4 = {
        name: 'Jonathan Clark',
        position: 'Director of Marketing',
        desc: "Prior to joining Dipsea Capital in 2019, Jonathan researched and managed portfolios of alternative investment strategies since 2003. Most recently, he was a Vice President at Progress Investment Management in San Francisco. Prior to moving to the west coast, he was a Managing Director at one of the oldest fund-of-funds in the United States, Sandalwood Securities. Previously, he was a Vice President at HSBC Alternative Investments in New York and, before that, a Vice President and Strategy Head at Optimal (a unit of Banco Santander) in New York. Jonathan earned an MBA with honors from Columbia Business School and a Bachelor’s in Business Administration, Summa Cum Laude, from John Brown University."
    }

    const Employee5 = {
        name: 'Jenine Stilson',
        position: 'Director of Operations',
        desc: "Ms. Stilson manages accounting, system administration, and business continuity functions as Director of Operations. Jenine brings a wide perspective and 25 years of experience managing businesses in various industries. Previously, she managed a multi-million dollar book of managed care and employee assistance program business at MHN, a Health Net Company. Ms. Stilson graduated with a Master’s Degree in Counseling Psychology from the University of San Francisco and a Bachelor’s in Psychology from Santa Clara University."
    }

    return (
        <div className="container">
            <Head>
                <title>Our Team - Dipsea Capital</title>
                <link rel="icon" href="/dipseaicon.jpg" />
                <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
            </Head>
            <SideDrawer show={ sideDrawerOpen } />
            { backdrop }
            <main>
                <div className='page-header'>
                    <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
                    <div className='title'>
                        <h4 className='subtitle'>Our Team</h4>
                        <div className='heading'>Experience and Dedication</div>
                    </div>
                </div>
                <div className='the-team fade-in'>
                    <div className='team-pic'><img src='/Team.png' alt='team picture' /></div>
                    <div className='intro'>Meet our executive team, combining 92+ years of experience in trading, operations, and managing client portfolios </div>
                </div>
                <div className='indy-mem'>
                    <Individual employee={Employee1} />
                    <Individual employee={Employee2} />
                    <Individual employee={Employee3} />
                    <Individual employee={Employee4} />
                    <Individual employee={Employee5} />
                </div>

            </main>
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
                        height: 60vh;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                      }

                      .team-pic {
                        padding: 2rem 0 0 0;
                      }

                      .intro {
                        font-family: 'Prata', serif;
                        font-size: calc(100vw * 0.014 + 0px);
                        width: 50%;
                        height: auto;
                        padding: 5rem 0 0 0;
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

export default team;
