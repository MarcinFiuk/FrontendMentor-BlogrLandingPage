import Section1 from './components/Sections/Section1';
import Section3 from './components/Sections/Section3';
import Footer from './components/Footer/Footer';
import Attribution from './components/Attribution/Attribution';

import { GlobalStyle } from './GlobalStyle';
import Section2 from './components/Sections/Section2';

function App() {
    return (
        <div>
            <GlobalStyle />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
            <Attribution />
        </div>
    );
}

export default App;
