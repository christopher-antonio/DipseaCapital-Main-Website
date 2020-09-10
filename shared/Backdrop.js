const Backdrop = ( props ) => {
    return (
        <React.Fragment>
            <div className='backdrop' onClick={ props.click } />
            <style jsx>
                {
                    `
                    .backdrop {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.3);
                        z-index: 100;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Backdrop;
