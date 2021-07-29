import React, { useEffect } from 'react';

import {
    Section,
    ImageElement,
    TextWrapper,
    IndividualParagraph,
    ParagraphHeading,
} from './sectionStyles';

const Section3 = () => {
    useEffect(() => {
        //windows.matchMedia -https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#receiving_query_notifications
        //IntersectionObserver’s
        //Resize Observer
    }, []);

    return (
        <Section>
            <ImageElement />

            <TextWrapper>
                <ParagraphHeading>Free, open, simple</ParagraphHeading>
                <IndividualParagraph>
                    Blogr is a free and open source application backed by a
                    large community of helpful developers. It supports features
                    such as code syntax highlighting, RSS feeds, social media
                    integration, third-party commenting tools, and works
                    seamlessly with Google Analytics. The architecture is clean
                    and is relatively easy to learn.
                </IndividualParagraph>
                <ParagraphHeading>Powerful tooling</ParagraphHeading>
                <IndividualParagraph>
                    Batteries included. We built a simple and straightforward
                    CLI tool that makes customization and deployment a breeze,
                    but capable of producing even the most complicated sites.
                </IndividualParagraph>
            </TextWrapper>
        </Section>
    );
};

export default Section3;
