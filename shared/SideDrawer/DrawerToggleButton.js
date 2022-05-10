import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const DrawerToggleButton = props => {
    return (
        <React.Fragment>
            <button className='toggleButton' onClick={ props.click } ><GiHamburgerMenu color="white" size={ 'calc(100vw * 1 / 140 + 20px)' } /></button>
            <style jsx>
                {
                    `
                    .toggleButton {
                        padding: 1;
                        box-sizing: border-box;
                        background-color: transparent;
                        cursor: pointer;
                        border: none;
                    }
                    
                    .toggleButton:focus {
                        outline: none;
                    }                   
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default DrawerToggleButton;