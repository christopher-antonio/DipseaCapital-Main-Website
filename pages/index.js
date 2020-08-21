import Head from 'next/head';
import Navbar from '../shared/Navbar';
import { useState, useEffect } from 'react';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop';
import { IoIosArrowDown } from 'react-icons/io';
import Footer from '../shared/Footer';
import Aos from 'aos';

export default function Home () {
  const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

  let backdrop;
  if ( sideDrawerOpen ) {
    backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
  }

  let s = null;

  useEffect( () => {
    Aos.init( { duration: 1200 } );
  } );

  return (
    <div className="container">
      <Head>
        <title>Dipsea Capital, LLC</title>
        <link rel="icon" href="/dipseaicon.jpg" />
        <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet"></link>
      </Head>

      <SideDrawer show={ sideDrawerOpen } />
      { backdrop }
      <main>
        
        <div className='hero'>
        <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
          {/* <div className='eyebrow fade-in'>At Dipsea Capital</div> */}
          <div className='top-space'></div>
          <div className='heading text-animation'>We believe in consistent and</div>
          <div className='heading-2 text-animation-2'>uncorrelated returns<div className='border'></div></div>
          <div className='space'></div>
          <div className='arrow' data-aos='fade-down'><IoIosArrowDown size={ 'calc(100vw * 5 / 131 + 0px)' } color='white' /></div>
        </div>
        <div className='belief' id='belief-section'>
          <div className='belief-sub'>
            <div className='headline'>
              <div className='line fade-in'></div>
              <h4 data-aos='fade-right'>We believe</h4>
            </div>
          </div>
          <div className='belief-content'>
            <ul className='list-content'>
              <li data-aos='fade-down'><p>The inherent volatility of markets creates significant challenges for investors</p></li>
              <li data-aos='fade-down'><p>Flexible, non-correlated investment strategies are a solution</p></li>
              <li data-aos='fade-down'><p>Liquidity for investment strategies matters: for effective risk management, for investor access to their capital, and for accurate portfolio marking</p></li>
              <li data-aos='fade-down'><p>Low volatility investment solutions facilitate superior wealth compounding</p></li>
              <li data-aos='fade-down'><p>In a full alignment of interests as demonstrated by a significant fund investment alongside our clients</p></li>
            </ul>
          </div>
        </div>
        <Footer />
      </main>

      <style jsx>{
        `
        .container {
          width: 100%;
        }

        .hero {
          height: 100vh;
          width: 100%;
          background-color: #283348;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }

        .eyebrow {
          color: white;
          font-size: calc(100vw * 0.0178 + 0px);
          font-weight: 300;
          padding: 7rem 0 0 5rem;
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
          padding: 2rem 0 0 5rem;
        }

        .heading-2 {
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

        .border {
          border-bottom: solid 3px white;
          width: 40px;
          animation: animated-cursor 0.75s step-end infinite;
        }

        .top-space {
          height: 8rem;
          width: 100vw;
        }

        .space {
          flex: 1;
        }

        .arrow {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding-bottom: 1rem;
          cursor: pointer;
        }

        .arrow a {
          transition: all 1s ease-in-out;
        }

        // belief section ------------

        .belief {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        .belief-sub {
          height: 80%;
          width: 30%;
        }

        .line {
          height: 3px;
          width: 180px;
          background-color: #4E638C;
          margin-left: 2rem;
        }

        .belief-sub h4 {
          margin: 0;
          padding: 1rem 2rem 2rem 2rem;
          font-size: calc(100vw * 0.014 + 0px);
        }

        .belief-content {
          height: 80%;
          width: 55%;
        }

        .list-content {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .list-content li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 1.5rem 1rem;
          font-size: 25px;
          font-weight: 300;
          border-top: 1px solid #8EB3FD;
          border-bottom: 1px solid #8EB3FD;
        }

        .list-content p {
          margin: 1rem;
          padding-left: 1rem;
          font-size: calc(100vw * 0.0157 + 0px);
        }

        .text-animation {
          animation: animated-text 2s steps(40,end) 1s 1 normal both;
        }

        .text-animation-2 {
          animation: animated-text 2s steps(40,end) 1s 1 normal both;
          animation-delay: 2.5s;
        }

        .fade-in {
          animation: fadeIn 0.70s ease-in;
        }

        .slide-down {
          animation: slideDown 0.75s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {opacity: 0; transform: translateY(-100%)}
          to {opacity: 1; transform: translateY(0)}		
        }
        
        @keyframes animated-text {
          from { width: 0%; }
          to { width: 80%; }
        }
        
        @keyframes animated-cursor {
          from, to { border-color: transparent }
          50% { border-color: white; }
        }

        @media (max-width: 376px) {
          .hero {
            height: 70vh;
          }

          .eyebrow {
            color: white;
            font-size: 10px;
            font-weight: 300;
            padding: 2rem 0 0 2rem;
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
            padding: 2rem 0 0 2rem;
          }
  
          .heading-2 {
            display: flex;
            height: auto;
            width: 80%;
            white-space: nowrap;
            overflow: hidden;
            font-family: 'Prata', serif;
            color: white;
            font-size: calc(100vw * 0.05 + 0px);
            padding: 1rem 0 0 2rem;
          }

          .border {
            border-bottom: solid 2px white;
            width: 20px;
            animation: animated-cursor 0.75s step-end infinite;
          }

          // Belif section ----------

          .belief {
            height: 640px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .belief-sub {
            height: 4%;
            width: 100%;
          }
  
          .line {
            height: 3px;
            width: 80px;
            background-color: #4E638C;
            margin-left: 1rem;
          }
  
          .belief-sub h4 {
            margin: 0;
            padding: 0.5rem 1rem 2rem 1rem;
            font-size: 10px;
          }
  
          .belief-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 80%;
            width: 100%;
          }
  
          .list-content {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 80%;
          }
  
          .list-content li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 1.5rem 1rem;
            font-size: 25px;
            font-weight: 300;
            border-top: 1px solid #8EB3FD;
            border-bottom: 1px solid #8EB3FD;
          }
  
          .list-content p {
            margin: 0;
            padding-left: 1rem;
            font-size: 12px;
          }

        }
        `
      }</style>

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
}
