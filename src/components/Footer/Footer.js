import React from 'react';

import LogoImage from '../UI/Logo';
import FooterList from './FooterList';

import { FooterContainer } from './footerStyles';
// import { productList, companyList, connectList, test } from './FooterList';

const Footer = () => {
    return (
        <FooterContainer>
            <LogoImage />
            <FooterList />
            {/* {productList}
            {companyList}
            {connectList} */}
        </FooterContainer>
    );
};

export default Footer;
