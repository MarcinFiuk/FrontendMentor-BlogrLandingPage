import React, { useState } from 'react';
import styled from 'styled-components';

import CloseIcon from '../UI/Close-icon';
import HamburgerIcon from '../UI/Hamburger-icon';
import Logo from '../UI/Logo';
import NavList from './Nav-list';

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;

    @media (min-width: 768px) {
        height: 50px;
    }
`;

const LogoSection = styled.div`
    display: flex;
`;

const ListSection = styled.div`
    display: flex;
    flex: 2;
`;

const MobileNavigationSection = styled.div`
    display: flex;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMobileMenuHandler = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <NavWrapper isOpen={isOpen}>
            <LogoSection>
                <Logo w='82px' h='32px' border={isOpen} />
            </LogoSection>
            <ListSection>
                <NavList isOpen={isOpen} />
            </ListSection>
            <MobileNavigationSection onClick={openMobileMenuHandler}>
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </MobileNavigationSection>
        </NavWrapper>
    );
};

export default Nav;
