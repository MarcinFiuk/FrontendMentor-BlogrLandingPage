import React from 'react';

import Header from './components/Header/Header';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section3 from './components/Sections/Section3';
import Footer from './components/Footer/Footer';
import Attribution from './components/Attribution/Attribution';

import { GlobalStyle } from './GlobalStyle';

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header />
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
            </main>
            <Footer />
            <Attribution />
        </React.Fragment>
    );
}

export default App;
