const List = ( props ) => {
    return (
        <React.Fragment>
            <div className='list'>
                <h4 data-aos='fade-up' data-aos-delay={ 200 }>{ props.content.head }</h4>
                <p className='about-1' data-aos='fade-up' data-aos-delay={ 300 }>{ props.content.detail }</p>
            </div>
            <style jsx>
                {
                    `
                    .list h4 {
                        font-size: 30px;
                        font-family: 'Prata', serif;
                        margin: 1rem 0;
                    }

                    .about-1 {
                        font-size: 19px;
                        line-height: 45px;
                        font-weight: 300;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default List;
