import styled from 'styled-components';

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
    padding-bottom: 6px;

    background: url(${(props) => props.bgcMobile || 'black'}) no-repeat;
    background-size: 150% 100%;
    background-position: center;

    @media (min-width: 1024px) {
        height: 784px;
        width: 786px;
        background: url(${(props) => props.bgcDesktop || 'black'}) no-repeat;
        background-position: -320px;
        background-size: 150% 99%;
    }
`;
// background: url(${photoMobile}) no-repeat;

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

export const SectionHeading = styled.h2`
    margin-bottom: 38px;
    text-align: center;
    font-weight: 600;
    font-size: 2.8rem;
    letter-spacing: -0.84px;
    color: hsl(208, 49%, 24%);
`;

export const ParagraphHeading = styled.h3`
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
