import React from 'react';
import styled from 'styled-components';

import Button from './../UI/Button';

export const IntroWrapper = styled.div`
    margin: 108px 0 156px;
    padding: 0 15px 0 15px;
    font-family: Overpass;
    color: hsl(0, 0%, 100%);
    text-align: center;
`;

export const PageTitle = styled.h1`
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 55px;
    letter-spacing: -1.08px;

    @media (min-width: 768px) {
        font-size: 5rem;
    }

    @media (min-width: 1024px) {
        font-size: 6.4rem;
        line-height: 98px;
        letter-spacing: -1.92px;
    }
`;

export const IntroParagraph = styled.p`
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 28px;

    @media (min-width: 768px) {
        font-size: 2rem;
        line-height: 31px;
    }
`;

export const IntroButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 290px;
    height: 48px;
    margin: 48px auto 0;
`;

// import {
//     IntroWrapper,
//     PageTitle,
//     IntroParagraph,
//     IntroButtonWrapper,
// } from './HeaderStyle';

const Intro = () => {
    return (
        <IntroWrapper>
            <PageTitle>A modern publishing platform</PageTitle>
            <IntroParagraph>
                Grow your audience and build your online brand
            </IntroParagraph>
            <IntroButtonWrapper>
                <Button SfF>Start for Free</Button>
                <Button LM>Learn More</Button>
            </IntroButtonWrapper>
        </IntroWrapper>
    );
};

export default Intro;
