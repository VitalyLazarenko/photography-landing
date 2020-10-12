import React from "react";
import styles from './catalog.module.scss';
import {Grid} from "@material-ui/core";

export const Catalog = () => {
    return (
        <Grid item md={11} className={styles.catalog_wrapper}>
            Catalog Static
        </Grid>
    )
}