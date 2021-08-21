import React from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
    @media (min-width: 768px) {
        display: none;
    }
`;

const HorizontalLine = () => {
    return <Hr></Hr>;
};

export default HorizontalLine;
