import React from 'react';

import {
    Section,
    SectionHeading,
    ImageElement,
    TextWrapper,
    ParagraphHeading,
    IndividualParagraph,
} from './sectionStyles';
import photoMobile from './../../assets/illustration-editor-mobile.svg';
import photoDesktop from './../../assets/illustration-editor-desktop.svg';

const Section1 = () => {
    return (
        <Section>
            <SectionHeading>Designed for the future</SectionHeading>
            <ImageElement bgcMobile={photoMobile} bgcDesktop={photoDesktop} />
            <TextWrapper>
                <ParagraphHeading>
                    Introducing an extensible editor
                </ParagraphHeading>
                <IndividualParagraph>
                    Blogr features an exceedingly intuitive interface which lets
                    you focus on one thing: creating content. The editor
                    supports management of multiple blogs and allows easy
                    manipulation of embeds such as images, videos, and Markdown.
                    Extensibility with plugins and themes provide easy ways to
                    add functionality or change the looks of a blog.
                </IndividualParagraph>
                <ParagraphHeading>Robust content management</ParagraphHeading>
                <IndividualParagraph>
                    Flexible content management enables users to easily move
                    through posts. Increase the usability of your blog by adding
                    customized categories, sections, format, or flow. With this
                    functionality, you’re in full control.
                </IndividualParagraph>
            </TextWrapper>
        </Section>
    );
};

export default Section1;
