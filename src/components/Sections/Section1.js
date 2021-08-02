import React from 'react';

import {
    Section,
    Container,
    SectionHeading,
    ImageElement,
    TextWrapper,
    ParagraphHeading,
    IndividualParagraph,
} from './oddSectionsStyles';
import photoMobile from './../../assets/illustration-editor-mobile.svg';
import photoDesktop from './../../assets/illustration-editor-desktop.svg';

const Section1 = () => {
    return (
        <Section>
            <SectionHeading>Designed for the future</SectionHeading>
            <Container>
                <ImageElement
                    bgcMobile={photoMobile}
                    bgcDesktop={photoDesktop}
                    order='2'
                    bgSizeM='122%'
                    heightD='882px'
                    widthD='610px'
                    bgPosition='-50px'
                />
                <TextWrapper mgrL='165px'>
                    <ParagraphHeading>
                        Introducing an extensible editor
                    </ParagraphHeading>
                    <IndividualParagraph>
                        Blogr features an exceedingly intuitive interface which
                        lets you focus on one thing: creating content. The
                        editor supports management of multiple blogs and allows
                        easy manipulation of embeds such as images, videos, and
                        Markdown. Extensibility with plugins and themes provide
                        easy ways to add functionality or change the looks of a
                        blog.
                    </IndividualParagraph>
                    <ParagraphHeading>
                        Robust content management
                    </ParagraphHeading>
                    <IndividualParagraph>
                        Flexible content management enables users to easily move
                        through posts. Increase the usability of your blog by
                        adding customized categories, sections, format, or flow.
                        With this functionality, you’re in full control.
                    </IndividualParagraph>
                </TextWrapper>
            </Container>
        </Section>
    );
};

export default Section1;
