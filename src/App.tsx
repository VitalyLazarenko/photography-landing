import React from 'react';
import styles from './app.module.scss';

import AppRouter from "./app.router";
import {Provider} from "react-redux";
import store from "./redux";

const App: React.FC = () => (
    <Provider store={store}>
        <main className={styles.main}>
            <AppRouter/>
        </main>
    </Provider>
);

export default App;
