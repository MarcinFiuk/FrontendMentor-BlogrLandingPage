import React from 'react';
import styled from 'styled-components';

import blogr from './../../assets/logo.svg';

const LogoImage = styled.img`
    height: 40px;
    width: 101px;
    margin-bottom: 33px;
`;

const Logo = () => {
    return <LogoImage src={blogr} />;
};

export default Logo;
