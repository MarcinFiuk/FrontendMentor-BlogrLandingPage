import React from 'react';
import styled, { keyframes } from 'styled-components';

const hamburgerAnimation = keyframes`
from{
    transform: scale(0) rotate(0)
}
to{
    transform: scale(1) rotate(180deg)
}
`;

const Button = styled.button`
    background: transparent;
    border: none;
    animation: ${hamburgerAnimation} 0.3s linear;
`;

const AnimatedButton = ({ children }) => {
    return <Button>{children}</Button>;
};

export default AnimatedButton;
