import React from 'react';

import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    width: 137px;
    height: 48px;
    border: none;
    border-radius: 28px;
    cursor: pointer;
    text-align: center;
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 18px;
    color: hsl(0, 0%, 100%);

    &:hover {
        background: hsl(355, 100%, 74%);
        color: hsl(0, 0%, 100%);
    }

    ${(props) =>
        props.login &&
        css`
            background: transparent;
            color: hsl(208, 49%, 24%);
            font-family: Overpass;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 28px;

            &:hover {
                background: transparent;
                color: hsl(208, 49%, 24%);
            }

            @media (min-width: 768px) {
                color: hsl(0, 0%, 100%);
                opacity: 0.75;

                &:hover {
                    color: hsl(0, 0%, 100%);
                }
            }
        `};

    ${(props) =>
        props.signup &&
        css`
            background: linear-gradient(
                135deg,
                hsl(13, 100%, 72%),
                hsl(353, 100%, 62%)
            );
        `};

    ${(props) =>
        props.SfF &&
        css`
            background-color: hsl(0, 0%, 100%);
            color: hsl(356, 100%, 66%);
        `};
    ${(props) =>
        props.LM &&
        css`
            background-color: transparent;
            border: 1px solid #ffffff;

            &:hover {
                background: hsl(0, 0%, 100%);
                color: hsl(356, 100%, 66%);
            }
        `};
`;

const Button = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
