import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Intro from './Intro';

import bgcPattern from './../../assets/bg-pattern-intro.svg';

export const HeaderStyle = styled.header`
    background: linear-gradient(
        135deg,
        hsl(13, 100%, 72%),
        hsl(353, 100%, 62%)
    );
    border-bottom-left-radius: 100px;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 56px 24px 156px;
    background-image: url(${bgcPattern});
    background-repeat: no-repeat;
    background-size: 375%;
    background-position: 35% 35%;
    border-bottom-left-radius: 100px;

    @media (min-width: 768px) {
        background-size: 200%;
        background-position: 20% 55%;
    }
`;

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderWrapper>
                <Nav />
                <Intro />
            </HeaderWrapper>
        </HeaderStyle>
    );
};

export default Header;
