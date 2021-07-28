import React from 'react';

import { ListTitle, List, NavigationLink } from './footerStyles';
import { menuElements } from './../../menuElements';

const FooterList = () => {
    return (
        <React.Fragment>
            {menuElements.map(({ name, links }, index) => {
                return (
                    <div key={index}>
                        <ListTitle>{name}</ListTitle>
                        <List>
                            {links.map(({ id, text, url }) => (
                                <li key={id}>
                                    <NavigationLink href={url}>
                                        {text}
                                    </NavigationLink>
                                </li>
                            ))}
                        </List>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default FooterList;

// export const productList = (
//     <div>
//         <ListTitle>Product</ListTitle>
//         <List>
//             {product.map(({ id, text, url }) => (
//                 <li key={id}>
//                     <NavigationLink href={url}>{text}</NavigationLink>
//                 </li>
//             ))}
//         </List>
//     </div>
// );

// export const companyList = (
//     <div>
//         <ListTitle>Company</ListTitle>
//         <List>
//             {company.map(({ id, text, url }) => (
//                 <li key={id}>
//                     <NavigationLink href={url}>{text}</NavigationLink>
//                 </li>
//             ))}
//         </List>
//     </div>
// );

// export const connectList = (
//     <div>
//         <ListTitle>Connect</ListTitle>
//         <List>
//             {connect.map(({ id, text, url }) => (
//                 <li key={id}>
//                     <NavigationLink href={url}>{text}</NavigationLink>
//                 </li>
//             ))}
//         </List>
//     </div>
// );
