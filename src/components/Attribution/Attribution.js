import React from 'react';

import styled from 'styled-components';

const AttributionContainer = styled.div`
    font-size: 11px;
    text-align: center;
`;

const Link = styled.a`
    color: hsl(228, 45%, 44%);
`;

const Attribution = () => {
    return (
        <AttributionContainer>
            Challenge by{' '}
            <Link
                href='https://www.frontendmentor.io?ref=challenge'
                target='_blank'
            >
                Frontend Mentor
            </Link>
            . Coded by{' '}
            <span style={{ color: 'hsl(228, 45%, 44%)' }}>Marcin Fiuk</span>.
        </AttributionContainer>
    );
};

export default Attribution;
