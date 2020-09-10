import { IoMdArrowRoundBack } from 'react-icons/io';

const MonthlyDrawer = props => {
    let drawerClasses = [ 'monthlyDrawer' ];
    if ( props.show ) {
        drawerClasses.push( 'open' );
    }

    return (
        <React.Fragment>
            <nav className={ drawerClasses.join( ' ' ) }>
                <div className='back-btn' onClick={ props.toggle }><IoMdArrowRoundBack color='white' size={ 35 } /></div>
                <div className='monthly-head'> INVESTOR LETTERS </div>
                <ul>
                    <li><a className='clickable' href='/Letters/December-2019.pdf' target='_blank' rel='noopener noreferrer'>December 2019</a></li>
                    <li><a className='clickable' href='/Letters/January-2020.pdf' target='_blank' rel='noopener noreferrer'>January 2020</a></li>
                    <li><a className='clickable' href='/Letters/February-2020.pdf' target='_blank' rel='noopener noreferrer'>Februay 2020</a></li>
                    <li><a className='clickable' href='/Letters/March-2020.pdf' target='_blank' rel='noopener noreferrer'>March 2020</a></li>
                    <li><a className='clickable' href='/Letters/April-2020.pdf' target='_blank' rel='noopener noreferrer'>April 2020</a></li>
                    <li><a className='clickable' href='/Letters/May-2020.pdf' target='_blank' rel='noopener noreferrer'>May 2020</a></li>
                    <li><a className='clickable' href='/Letters/June-2020.pdf' target='_blank' rel='noopener noreferrer'>June 2020</a></li>
                    <li><a className='clickable' href='/Letters/July-2020.pdf' target='_blank' rel='noopener noreferrer'>July 2020</a></li>
                    <li><a className='clickable' href='/Letters/August-2020.pdf' target='_blank' rel='noopener noreferrer'>August 2020</a></li>
                </ul>
            </nav>
            <style jsx>
                {
                    `
                    .monthlyDrawer {
                        height: 100%;
                        background-color: #3E4E6E;
                        box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 25vw;
                        z-index: 150;
                        transform: translateX(-100%);
                        transition: transform 0.4s ease-in-out;
                        font-size: max(calc(100vw * 14 / 1450 + 6px), 12px);
                    }

                    .back-btn {
                        display: none;
                    }
                    
                    .open {
                        transform: translateX(120%) !important;
                    }

                    .monthly-head {
                        padding: 5rem 0 0 10%;
                        color: white;
                    }
                    
                    .monthlyDrawer ul {
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        margin: 0;
                        padding: 1.5rem 0 0 10%;
                    }
                    
                    .monthlyDrawer li {
                        padding: 1rem 0 1rem 10%;
                    }
                   
                    .clickable {
                        text-decoration: none;
                        color: white;
                        font-weight: 250;
                        margin: 0;
                        padding-bottom: 6px;
                        font-size: max(calc(100vw * 14 / 1450 + 2px), 12px);
                    }

                    .clickable:hover {
                        border-bottom: 3px solid #8EB3FD;
                        transition: border-bottom 0.3s;
                    }

                    .logo {
                        height: auto;
                        width: calc(100vw * 16 / 131 + 0px);
                        padding: 12px 0;
                        margin: 15% 0 0 17%;
                        background-color: #fff;
                    }

                    .logo img {
                        background-color: white;
                        height: auto;
                        width: calc(100vw * 16 / 131 + 0px);
                    }

                    @media (max-width: 541px) {
                        .back-btn {
                            display: flex;
                            padding: 30px 0 0 20px;
                        }

                        .monthly-head {
                            padding: 20% 0 0 10%;
                            color: white;
                        }

                        .monthlyDrawer {
                            width: 70vw;
                            z-index: 250;
                        }
                        .monthlyDrawer ul {
                            padding: 10% 0 0 10%;
                        }
                        .open {
                            transform: translateX(0%) !important;
                        }

                        .clickable p { 
                            font-size: 12px;
                        }
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default MonthlyDrawer;