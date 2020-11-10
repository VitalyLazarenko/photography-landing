import React from 'react';
// import {Provider} from "react-redux";
// import store from "./redux";
import styles from './app.module.scss';
import AppRouter from "./app.router";

import HeaderComponent from "./components/Header.component";
import HomePage from "./pages/Home.page";
import PricePage from "./pages/Price.page";
import Footer from "./components/Footer.component";
import {AboutPage} from "./pages/About.page/About";

const App: React.FC = () => (
    <main className={styles.main}>
        <HeaderComponent/>
        {/*<HomePage/>*/}
        {/*<PricePage/>*/}
        <AboutPage/>
        <Footer/>
    </main>
);

export default App;
