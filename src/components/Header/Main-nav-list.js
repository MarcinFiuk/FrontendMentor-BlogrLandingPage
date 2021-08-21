import React, { useState } from 'react';
import styled from 'styled-components';

import SubNavList from './Sub-nav-list';
import { menuElements } from './../../menuElements';
import IconArrowDown from './../UI/Icon-arrow-down';
import AnimatedButton from '../UI/Animated-button';

const TopNavList = styled.ul`
    list-style: none;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const TopNavListElement = styled.li`
    position: relative;
    font-family: Overpass;
    font-weight: 600;
    font-size: 18px; //NOTE: change to rem
    line-height: 28px;
    text-transform: capitalize;
    margin-bottom: 24px;
    cursor: pointer;

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px) {
        margin: 0 31px 0 0;
        color: hsla(0, 0%, 100%, 0.75);
        transition: all 0.1s ease-in;

        & span:hover {
            text-decoration: underline;
            color: hsla(0, 0%, 100%, 1);
        }
    }
    //TODO: there must to be change in opacity while the link is active. check figma.
    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8px;
        height: 28px;
        margin-left: 8px;
        padding: 5px 0;
        border: none;
        background: none;
        cursor: pointer;
        transition: padding 0.2s ease-out;

        &:hover {
            padding-top: 0;
        }
    }
`;

const MineNavList = () => {
    const [subNavIsOpen, setSumNavIsOpen] = useState(false);

    const openSubNavHandler = (index) => {
        if (subNavIsOpen === index) {
            return setSumNavIsOpen(null);
        }

        setSumNavIsOpen(index);
    };

    return (
        <TopNavList>
            {menuElements.map(({ id, name, links }, index) => (
                <TopNavListElement
                    key={id}
                    onClick={() => openSubNavHandler(index)}
                >
                    <div>
                        <span>{name}</span>
                        <AnimatedButton>
                            <IconArrowDown />
                        </AnimatedButton>
                    </div>

                    {subNavIsOpen === index ? (
                        <SubNavList elements={links} />
                    ) : null}
                </TopNavListElement>
            ))}
        </TopNavList>
    );
};

export default MineNavList;
