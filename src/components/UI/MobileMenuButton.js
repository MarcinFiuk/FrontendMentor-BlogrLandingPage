import React, { useState } from 'react';
import styled from 'styled-components';

import iconClose from './../../assets/icon-close.svg';
import hamburger from './../../assets/icon-hamburger.svg';

const Button = styled.button`
    background: transparent;
    border: none;

    @media (min-width: 768px) {
        display: none;
    }
`;

const NavBarIcon = styled.img``;

const MobileMenuButton = ({ openMenu, menuState }) => {
    return (
        <Button onClick={openMenu}>
            <NavBarIcon src={menuState ? iconClose : hamburger} alt='' />
        </Button>
    );
};

export default MobileMenuButton;
