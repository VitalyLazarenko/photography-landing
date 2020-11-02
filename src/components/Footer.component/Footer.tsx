import React from "react";
import styles from './footer.module.scss';
import {Grid, Typography} from "@material-ui/core";

export const Footer = () => {
    return (
        <Grid container className={styles.footer_wrapper}>
            <Typography className={styles.title}>Григоренко Сергей</Typography>
        </Grid>
    )
}