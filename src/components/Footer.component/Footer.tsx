import React from "react";
import styles from './footer.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {HashLink as Link} from "react-router-hash-link";
import {Routes} from "../../app.router";

export const Footer = () => {
    return (
        <Grid container className={styles.footer_wrapper}>
            <Link
                to={`${Routes.HomePage}`}
                scroll={(el) => el.scrollIntoView({behavior: "smooth"})}
                style={{textDecoration: 'none'}}
            >
                <Typography className={styles.title}>Григоренко Сергей</Typography>
            </Link>
        </Grid>
    )
}