import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top-right-radius: 100px;
    background-color: hsl(240, 10%, 16%);
    color: hsl(0, 0%, 100%);
    padding: 75px 14px;
    line-height: 33px;
    text-align: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 35px 85px;
    }

    @media (min-width: 1024px) {
        padding: 70px 165px;
    }
`;

export const ListTitle = styled.h6`
    font-size: 1.8rem;
    font-weight: 500;
    margin: 40px 0 21px;
    text-transform: capitalize;

    @media (min-width: 768px) {
        margin-top: 0;
    }
`;

export const List = styled.ul`
    list-style: none;
`;

export const NavigationLink = styled.a`
    color: hsl(240, 2%, 79%);
    font-weight: 400;
    text-decoration: none;
`;
