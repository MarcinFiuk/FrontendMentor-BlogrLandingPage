import React from 'react';
import styled from 'styled-components';

// import NavListWrapper from '../UI/NavWrapper';
import MineNavList from './Main-nav-list';
import HorizontalLine from './../UI/HorizontalLine';
import Button from './../UI/Button';

const NavListWrapper = styled.div`
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '125px' : '-100%')};
    left: calc((100% - 324px) / 2);
    width: 324px;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    background-color: hsl(0, 0%, 100%);
    border-radius: 5px;
    box-shadow: 0 20px 40px 0 hsla(0, 0%, 0%, 0.24);
    padding: 24px 24px 32px;
    transition: opacity ${({ isOpen }) => (isOpen ? '0.2s 0.3s' : '0.15s')}
            ease-in-out,
        top ${({ isOpen }) => (isOpen ? '0.4s' : '0.7s')} ease-in-out;

    @media (min-width: 768px) {
        position: static;
        width: 100%;
        opacity: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
        box-shadow: none;
        color: hsl(0, 0%, 100%);
        padding: 0;
        margin-left: 30px;
    }

    @media (min-width: 1024px) {
        margin-left: 64px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const NavList = ({ isOpen }) => {
    return (
        <NavListWrapper isOpen={isOpen}>
            <MineNavList />
            <HorizontalLine />
            <ButtonWrapper>
                <Button login>login</Button>
                <Button signup>sign up</Button>
            </ButtonWrapper>
        </NavListWrapper>
    );
};

export default NavList;
