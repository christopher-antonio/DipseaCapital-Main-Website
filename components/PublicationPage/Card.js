/** 
 * Individual cards for the publication page
*/

const Card = ( props ) => {

    const goTo = () => {
        window.open( props.content.link );
    };

    return (
        <React.Fragment>
            <div className='card' data-aos='fade-up' data-aos-delay={ props.delay }>
                <div className='head' onClick={ goTo }>{ props.content.head }</div>
                <div className='date'>{ props.content.date }</div>
                <div className='author'>{ props.content.author }</div>
                <div className='desc'>{ props.content.desc }</div>
            </div>
            <style jsx>
                {
                    `
                    .card {
                        width: 80%;
                        height: auto;
                        box-shadow: 0 0 10px 2px lightgrey;
                        margin: 2rem 0;
                    }

                    .head {
                        font-size: calc(100vw * 5 / 262 + 0px);
                        padding: 3rem calc(100vw * 3 / 131 + 0px) 2rem calc(100vw * 3 / 131 + 0px);
                        color: #111111;
                        cursor: pointer;
                        transition: 0.2s ease-in-out;
                    }

                    .head:hover {
                        color: #4E638C;
                    }

                    .date {
                        font-size: calc(100vw * 13 / 1310 + 0px);
                        font-weight: 500;
                        padding: 0 calc(100vw * 3 / 131 + 0px) 0 calc(100vw * 3 / 131 + 0px);
                    }

                    .author {
                        font-size: calc(100vw * 13 / 1310 + 0px);
                        font-weight: 300;
                        padding: 0 calc(100vw * 3 / 131 + 0px) 2rem calc(100vw * 3 / 131 + 0px);
                    }

                    .desc {
                        font-size: calc(100vw * 3 / 262 + 0px);
                        font-weight: 400;
                        padding: 0 calc(100vw * 3 / 131 + 0px) calc(100vw * 3 / 131 + 0px) calc(100vw * 3 / 131 + 0px);
                        font-family: 'Prata',serif;
                        letter-spacing: 1px;
                        color: #000;
                        text-align: justify;
                    }

                    @media (max-width: 541px) {
                        .head {
                            font-size: 14px;
                            padding: 1rem 1rem 0.2rem 1rem;
                        }

                        .date {
                            font-size: 7px;
                            padding: 0.5rem 1rem 0.2rem 1rem;
                        }
                        .author {
                            font-size: 7px;
                            padding: 0 1rem 0.4rem 1rem;
                        }

                        .desc {
                            font-size: 9px;
                            padding: 0 1rem 2rem 1rem;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Card;
