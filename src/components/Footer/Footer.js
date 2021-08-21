import React from 'react';

import Logo from '../UI/Logo';
import FooterList from './FooterList';

import { FooterContainer } from './footerStyles';
// import { productList, companyList, connectList, test } from './FooterList';

const Footer = () => {
    return (
        <FooterContainer>
            <Logo marBottom='32px' w='101px' h='40px' />
            <FooterList />
        </FooterContainer>
    );
};

export default Footer;
