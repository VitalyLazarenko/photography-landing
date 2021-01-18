import React from 'react';
// import {Provider} from "react-redux";
// import store from "./redux";
import styles from './app.module.scss';

import AppRouter from "./app.router";

const App: React.FC = () => (
    <main className={styles.main}>
        <AppRouter/>
    </main>
);

export default App;
