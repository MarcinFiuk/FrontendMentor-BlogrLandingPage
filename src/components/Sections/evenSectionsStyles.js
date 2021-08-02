import styled from 'styled-components';

import bgcCircles from './../../assets/bg-pattern-circles.svg';

export const Section = styled.section`
    position: relative;
    width: 100%;
    height: 625px;
    background-image: linear-gradient(hsl(237, 17%, 21%), hsl(237, 23%, 32%));
    border-radius: 0 100px 0 100px;
    font-family: Overpass, sans-serif;
    color: hsl(0, 0%, 100%);
    margin-top: 274px;

    @media (min-width: 768px) {
        height: 400px;
        margin: 57px 0 116px;
    }
    @media (min-width: 1024px) {
    }
`;

export const ImageElement = styled.img`
    position: absolute;
    width: 327.28px;
    height: 346.65px;
    top: -174px;
    left: calc((100% - 327px) / 2);

    @media (min-width: 768px) {
        top: 37px;
        left: 8%;
    }

    @media (min-width: 1170px) {
        width: 472px;
        height: 549px;
        top: -50px;
        left: 11.75%;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    background: url(${bgcCircles}) no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: -260px;
    padding: 220px 24px 94px;
    text-align: center;

    @media (min-width: 768px) {
        padding: 50px 80px 50px 0;
        text-align: left;
        background-size: 1014px 1018px;
        background-position-x: -213px;
        background-position-y: -509px;
    }

    @media (min-width: 1024px) {
        padding: 111px 165px 111px 0;
    }
`;

export const ParagraphHeading = styled.h3`
    font-weight: 600;
    font-size: 40px;
    line-height: 61px;
    letter-spacing: -1.2px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        margin-left: 57.75%;
    }
`;

export const IndividualParagraph = styled.p`
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0.5px;

    @media (min-width: 768px) {
        margin-left: 57.75%;
    }
`;
