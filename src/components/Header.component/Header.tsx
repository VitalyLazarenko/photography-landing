import React from 'react';
import {Grid} from '@material-ui/core'
import styles from './header.module.scss';

export const HeaderComponent = () => {
    return(
        <Grid container className={styles.header_wrapper}>
            <Grid item md={12} className={styles.logo_container}>
                <img src="/assets/images/header/logo.png" alt=""/>
            </Grid>
            <Grid item md={12} className={styles.button_container}>
                <button className={styles.button}>
                    Home
                </button>
                <button className={styles.button}>
                    Price
                </button>
                <button className={styles.button}>
                    About me
                </button>
            </Grid>
        </Grid>
    )
}