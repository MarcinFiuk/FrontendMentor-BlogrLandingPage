import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 78px 24px 0 24px;
    font-family: Overpass, sans-serif;
    overflow: hidden;
    margin-bottom: ${(props) => props.mgrBM || '0px'};

    @media (min-width: 1024px) {
        margin: 71px 0;
        margin-bottom: ${(props) => props.mgrBD || '0px'};
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
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
    background-size: ${(props) => props.bgSizeM || '0px'};
    background-position: center;

    @media (min-width: 768px) {
        order: ${(props) => props.order};
    }

    @media (min-width: 1024px) {
        height: ${(props) => props.heightD || 'auto'};
        width: ${(props) => props.widthD || 'auto'};
        background: url(${(props) => props.bgcDesktop || 'black'}) no-repeat;
        background-position: ${(props) => props.bgPosition || 'auto'};
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
        width: 540px;
        margin-right: ${(props) => props.mgrR || '0'};
        margin-left: ${(props) => props.mgrL || '0'};
    }
`;

export const SectionHeading = styled.h2`
    margin-bottom: 38px;
    text-align: center;
    font-weight: 600;
    font-size: 2.8rem;
    letter-spacing: -0.84px;
    color: hsl(208, 49%, 24%);

    @media (min-width: 1024px) {
        position: absolute;
        top: 79px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 40px;
    }
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
