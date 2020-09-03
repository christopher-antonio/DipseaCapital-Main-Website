import Head from 'next/head';
import { useEffect } from 'react';

import PageHeading from '../shared/PageHeading';
import Aos from 'aos';
import Footer from '../shared/Footer';
import Card from '../components/PublicationPage/Card';
import MetaTag from '../shared/MetaTag';

const publications = () => {

    const headDetail = {
        subtitle: 'Insights',
        heading: 'Latest articles & letters'
    };

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    const card1 = {
        head: 'Volatility: It’s Worse Than You Thought',
        date: 'Third Quarter 2018',
        author: 'Phil Davis',
        desc: 'This In Practice piece gives a practitioner’s perspective on the article “Volatility Lessons,” by Eugene F. Fama and Kenneth R. French, published in the Third Quarter 2018 issue of the Financial Analysts Journal.',
        link: 'https://www.cfainstitute.org/research/financial-analysts-journal/2018/ip-v3-n1-12-volatility-worse-than-thought'
    };

    const card2 = {
        head: 'Best Idea 2020: Business of Water-as-a-Service (WAAS): AquaVenture Holdings Ltd',
        date: 'December 6, 2019',
        author: 'Holly Singer',
        desc: 'On December 4th, Hedge Connection hosted its End of Year Recap and Holiday Celebration. The event opened with Mithra Warrier of TD Securities moderating a panel of hedge fund managers in a discussion of their Best Ideas for 2020.  Each of the managers on the panel will have their best idea featured here on The Edge. Below we have Christopher Antonio, CIO, Dipsea Capital LLC breakdown AquaVenture Holdings, a developer and provider of sustainable water.',
        link: 'https://hedgeconnection.com/blog/?p=11336'
    };

    const card3 = {
        head: 'Cognitive Biases',
        date: 'June 2019',
        author: 'Christopher Antonio',
        desc: 'There are numerous factors which can degrade our performance from a psychological perspective. Today I’ll begin with three of them, and offer a few tricks I use as a fund manager to assist in neutralizing sub-optimal decision making.',
        link: 'https://94ee4a5b-e92a-42d7-b59e-6a64f93b3bcd.filesusr.com/ugd/8f3ee2_cbbe6c85e3224a6daff76691ecb25329.pdf'
    };

    const card4 = {
        head: 'Fund Commentary',
        date: 'May 2020',
        author: 'Christopher Antonio',
        desc: 'In declining volatility environments, we actively position the portfolio to profit from volatility, rather than directionality. Similar to April, our models did not signal increased risk-taking, so we maintained modest gross exposure throughout the month and net exposure averaged-1.1%. This served us better with stronger gains during the first half of May as the S&P 500 was range-bound, however we also experienced steady gains through month end. Both indexes and single-names were profitable, with indexes accounting for 59% of the gain.',
        link: 'https://www.dropbox.com/s/bp63ul531swl33o/Dipsea%20Capital%20LP%20May%202020%20investor%20letter.pdf?dl=0'
    };

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
                        <Card content={ card4 } delay={ 0 } />
                        <Card content={ card2 } delay={ 200 } />
                        <Card content={ card3 } delay={ 0 } />
                        <Card content={ card1 } delay={ 200 } />
                    {/* <div className='sub-left'>
                        <Card content={ card4 } delay={ 0 } />
                        <Card content={ card3 } delay={ 0 } />
                    </div>
                    <div className='sub-right'>
                        <Card content={ card2 } delay={ 200 } />
                        <Card content={ card1 } delay={ 200 } />
                    </div> */}
                </div>
                <div className='spacing'></div>
            </main>
            <Footer />
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
                        width: 100vw;
                    }

                    @media (max-width: 451px) {
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
                            width: 100vw;
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
