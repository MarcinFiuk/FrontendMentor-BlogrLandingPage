import React from 'react';
import styled from 'styled-components';

import LogoImage from '../UI/Logo';

import { company, product, connect } from './../../menuElements';

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top-right-radius: 100px;
    background-color: hsl(240, 10%, 16%);
    color: hsl(0, 0%, 100%);
    padding: 75px 14px;
    line-height: 33px;
    text-align: center;
`;

const ListTitle = styled.h6`
    font-size: 1.8rem;
    font-weight: 500;
    margin: 40px 0 21px;
`;

const List = styled.ul`
    list-style: none;
`;

const ListElement = styled.li``;

const NavigationLink = styled.a`
    color: hsl(240, 2%, 79%);
    font-weight: 400;
    text-decoration: none;
`;

const productList = (
    <div>
        <ListTitle>Product</ListTitle>
        <List>
            {product.map(({ id, text, url }) => (
                <ListElement key={id}>
                    <NavigationLink href={url}>{text}</NavigationLink>
                </ListElement>
            ))}
        </List>
    </div>
);

const companyList = (
    <div>
        <ListTitle>Company</ListTitle>
        <List>
            {company.map(({ id, text, url }) => (
                <ListElement key={id}>
                    <NavigationLink href={url}>{text}</NavigationLink>
                </ListElement>
            ))}
        </List>
    </div>
);

const connectList = (
    <div>
        <ListTitle>Connect</ListTitle>
        <List>
            {product.map(({ id, text, url }) => (
                <ListElement key={id}>
                    <NavigationLink href={url}>{text}</NavigationLink>
                </ListElement>
            ))}
        </List>
    </div>
);

const Footer = () => {
    return (
        <FooterContainer>
            <LogoImage />
            {productList}
            {companyList}
            {connectList}
        </FooterContainer>
    );
};

export default Footer;
