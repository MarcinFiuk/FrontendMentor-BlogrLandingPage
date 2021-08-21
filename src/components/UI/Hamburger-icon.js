import React from 'react';
import AnimatedButton from './Animated-button';

const HamburgerIcon = () => {
    return (
        <AnimatedButton>
            <svg width='32' height='18' xmlns='http://www.w3.org/2000/svg'>
                <g fill='#FFF' fillRule='evenodd'>
                    <path d='M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z' />
                </g>
            </svg>
        </AnimatedButton>
    );
};

export default HamburgerIcon;
