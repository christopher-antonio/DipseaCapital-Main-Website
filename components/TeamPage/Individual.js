const Individual = ( props ) => {
    return (
        <React.Fragment>
            <div className='employee'>
                <div className='bio' data-aos='fade-up'>
                    <div className='image'><img src={ props.employee.pic } /></div>
                    <div className='intro'>
                        <div className='name'>{ props.employee.name }</div>
                        <div className='position'>{ props.employee.position }</div>
                    </div>
                </div>
                <div className='description' data-aos='fade-up'>
                    <div className='about'>
                        <p>{ props.employee.desc }</p>
                    </div>
                </div>


            </div>
            <div className='space-between-indy'></div>
            <style jsx>
                {
                    `
                    .employee {
                        height: max(calc(100vw * 51 / 148 + 0px), 330px);
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: center;
                    }

                    .bio {
                        height: auto;
                        width: 25%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                    }

                    .image {
                        height: auto;
                        width: 80%;
                        padding-left: 2rem;
                        
                    }

                    .image img {
                        height: auto;
                        width: 100%;
                        box-shadow: 1px 2px 2px rgba(0,0,0,0.3);
                    }

                    .intro {
                        padding: 2rem 0 0 2rem;
                    }

                    .name {
                        font-size: calc(100vw * 0.0165 + 0px);
                        font-weight: 250;
                    }

                    .position {
                        padding: 1rem 0 0 0;
                        font-size: calc(100vw * 0.011 + 0px);
                        font-family: 'Prata', serif;
                    }

                    .description {
                        height: 80%;
                        width: 60%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                    }

                    .about p {
                        font-family: 'Prata', serif;
                        font-size: max(calc(100vw * 0.011 + 0px), 12px);
                        line-height: calc(100vw * 4 / 131 + 0px);
                        margin: 0;
                        padding: 0 0 0 2rem;
                        text-align: justify;
                    }

                    @media (max-width: 451px) {
                        .employee {
                            height: auto;
                            flex-direction: column;
                        }

                        .bio {
                            height: 120px;
                            width: 100%;
                            flex-direction: row;
                            align-items: center;
                            justify-content: flex-start;
                        }

                        .image {
                            width: 110px;
                        }

                        .image img {
                            height: auto;
                            width: 80px;
                        }

                        .description {
                            height: auto;
                            width: 90%;
                            margin-top: 20px;
                            justify-content: flex-start;
                        }

                        .intro {
                            padding: 0.5rem 0 0 2rem;
                        }

                        .about p {
                            font-size: 10px;
                            padding: 0 0 0 1rem;
                            line-height: 20px;
                        }

                        .name {
                            font-size: 12px;
                        }

                        .position {
                            font-size: 10px;
                            padding: 0.3rem 0 0 0;
                        }

                        .space-between-indy {
                            height: 20px;
                        }
                    }
                    
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Individual;
