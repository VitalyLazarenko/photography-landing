import React from "react";
import styles from './home.module.scss';
import {Grid} from "@material-ui/core";
import {Catalog} from "./static/catalog/Catalog";

export const HomePage = () => {
    return(
        <Grid container className={styles.home_wrapper}>
            <Grid item md={12} className={styles.video_container}>
                <img src="/assets/images/HomePage/top1.jpg" alt=""/>
            </Grid>

            <Grid container className={styles.catalog}>
                <Catalog/>
            </Grid>
        </Grid>
    )
}