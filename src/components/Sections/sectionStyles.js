import styled from 'styled-components';

import photoMobile from './../../assets/illustration-laptop-mobile.svg';
import photoDesktop from './../../assets/illustration-laptop-desktop.svg';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    font-family: Overpass, sans-serif;
    margin: 78px 24px 100px 24px;
    overflow: hidden;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-left: 0;
    }
`;

export const ImageElement = styled.div`
    align-self: center;
    width: 326px;
    height: 326px;
    overflow: hidden;
    background: url(${photoMobile}) no-repeat;
    background-size: 150% 109%;
    background-position: center;

    @media (min-width: 1024px) {
        height: 784px;
        width: 786px;
        background: url(${photoDesktop}) no-repeat;
        background-position: -280px;
        background-size: 150% 99%;
    }
`;

export const TextWrapper = styled.div`
    padding: 0 2px 0 6px;
    text-align: center;

    @media (min-width: 768px) {
        justify-content: space-evenly;
        width: 450px;
        text-align: left;
    }
    @media (min-width: 1024px) {
        width: 600px;
        margin-right: 125px;
    }
`;

export const ParagraphHeading = styled.h2`
    font-weight: 600;
    font-size: 2.8rem;
    line-height: 32px;
    color: hsl(208, 49%, 24%);
    margin: 40px 0 16px;
`;

export const IndividualParagraph = styled.p`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: hsl(207, 13%, 34%);

    @media (min-width: 1024px) {
        padding-bottom: 24px;
    }
`;
