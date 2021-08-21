import React from 'react';
import styled from 'styled-components';

const SubNavListWrapper = styled.ul`
    list-style: none;
    background: hsla(237, 17%, 21%, 0.08);
    border-radius: 5px;
    padding: 17px 0 13px;
    margin-top: 24px;

    @media (min-width: 768px) {
        position: absolute;
        left: 0;
        background: hsl(0, 0%, 100%);

        padding: 24px;
    }

    & li {
        text-align: center;
        margin-bottom: 12px;

        @media (min-width: 768px) {
            font-family: Ubuntu;
            font-weight: 400;
            font-size: 15px;
            line-height: 33px;
            color: hsl(237, 17%, 21%);
            width: 120px;

            &:last-of-type {
                margin-bottom: 0;
            }

            &:hover {
                font-weight: 700;
            }
        }
    }
`;

const SubNavList = ({ elements }) => {
    return (
        <SubNavListWrapper>
            {elements.map((el) => (
                <li>{el.text}</li>
            ))}
        </SubNavListWrapper>
    );
};

export default SubNavList;
