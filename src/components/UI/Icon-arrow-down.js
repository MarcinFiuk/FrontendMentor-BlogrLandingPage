import React from 'react';
import styled from 'styled-components';

const Path = styled.path`
    stroke: hsl(355, 100%, 74%);

    @media (min-width: 768px) {
        stroke: hsl(0, 0%, 100%);
    }
`;

const IconArrowDown = ({ color }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='8'
            height='4'
            viewBox='0 0 10 7'
        >
            <Path
                fill='none'
                stroke={color}
                strokeWidth='2'
                opacity='1'
                d='M1 1l4 4 4-4'
            />
        </svg>
    );
};

export default IconArrowDown;
