import React from 'react';
import {Grid} from '@material-ui/core'
import styles from './header.module.scss';
import {Link} from "react-router-dom";
import Routes from '../../app.router/router.constants';

export const HeaderComponent = () => {
    return(
        <Grid container className={styles.header_wrapper}>
            <Grid item md={12} className={styles.logo_container}>
                <img src="/assets/images/header/logo.png" alt=""/>
            </Grid>
            <Grid item md={12} className={styles.button_container}>
                <Link to={Routes.HomePage} className={styles.button}>
                    Home
                </Link>
                <button className={styles.button}>
                    Portfolio
                </button>
                <Link to={Routes.PricePage} className={styles.button}>
                    Price
                </Link>
                <Link to={Routes.AboutPage} className={styles.button}>
                    About me
                </Link>
            </Grid>
        </Grid>
    )
}