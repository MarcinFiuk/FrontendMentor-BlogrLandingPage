import React, { useEffect } from 'react';

import {
    Section,
    Container,
    ImageElement,
    TextWrapper,
    IndividualParagraph,
    ParagraphHeading,
} from './oddSectionsStyles';

import photoMobile from './../../assets/illustration-laptop-mobile.svg';
import photoDesktop from './../../assets/illustration-laptop-desktop.svg';

const Section3 = () => {
    useEffect(() => {
        //windows.matchMedia -https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#receiving_query_notifications
        //IntersectionObserver’s
        //Resize Observer
    }, []);

    return (
        <Section mgrBM='100px' mgrBD='123px'>
            <Container>
                <ImageElement
                    bgcMobile={photoMobile}
                    bgcDesktop={photoDesktop}
                    bgSizeM='150%'
                    heightD='790px'
                    widthD='637px'
                    bgPosition='-279px'
                />
                <TextWrapper mgrR='125px'>
                    <ParagraphHeading>Free, open, simple</ParagraphHeading>
                    <IndividualParagraph>
                        Blogr is a free and open source application backed by a
                        large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds,
                        social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The
                        architecture is clean and is relatively easy to learn.
                    </IndividualParagraph>
                    <ParagraphHeading>Powerful tooling</ParagraphHeading>
                    <IndividualParagraph>
                        Batteries included. We built a simple and
                        straightforward CLI tool that makes customization and
                        deployment a breeze, but capable of producing even the
                        most complicated sites.
                    </IndividualParagraph>
                </TextWrapper>
            </Container>
        </Section>
    );
};

export default Section3;
