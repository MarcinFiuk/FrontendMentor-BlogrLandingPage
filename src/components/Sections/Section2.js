import React from 'react';

import phonesImage from './../../assets/illustration-phones.svg';

import {
    Section,
    ImageElement,
    TextWrapper,
    ParagraphHeading,
    IndividualParagraph,
} from './evenSectionsStyles';

const Section2 = () => {
    return (
        <Section>
            <ImageElement src={phonesImage}></ImageElement>
            <TextWrapper>
                <ParagraphHeading>
                    State of the Art Infrastructure
                </ParagraphHeading>
                <IndividualParagraph>
                    With reliability and speed in mind, worldwide data centers
                    provide the backbone for ultra-fast connectivity. This
                    ensures your site will load instantly, no matter where your
                    readers are, keeping your site competitive.
                </IndividualParagraph>
            </TextWrapper>
        </Section>
    );
};

export default Section2;
