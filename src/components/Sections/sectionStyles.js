import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    font-family: Overpass, sans-serif;
    margin: 78px 24px 100px 24px;
    overflow: hidden;

    @media (min-width: 768px) {
        flex-direction: row;
        // justify-content: space-evenly;
    }

    @media (min-width: 1024px) {
        justify-content: space-between;
        align-items: center;
    } ;
`;

export const ImageWrapper = styled.div`
    align-self: center;
    width: 326px;
    height: 326px;
    overflow: hidden;

    @media (min-width: 1024px) {
        height: 784px;
        width: 786px;
    }
`;

export const Image = styled.img`
    height: 326px;
    width: 326px;
    transform: scaleX(1.5) scaleY(1.1);

    @media (min-width: 1024px) {
        height: 784px;
        width: 860px;
        transform: translateX(-245px);
    }
`;

export const TextWrapper = styled.div`
    padding: 0 2px 0 6px;
    text-align: center;

    @media (min-width: 768px) {
        width: 50%;
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

    @media (min-width: 1024px) {
        // margin-top: 0;
    }
`;

export const IndividualParagraph = styled.p`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: hsl(207, 13%, 34%);

    @media (min-width: 1024px) {
        margin-bottom: 24px;
    }
`;
