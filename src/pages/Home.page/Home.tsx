import React from "react";
import styles from './Home.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {portfolioSelector, videoHomePageSelector} from "../../redux/app.module";
import {Catalog, Contacts} from "../../components";

export const HomePage = () => {
    const videoHomePage = useSelector(videoHomePageSelector);
    const portfolio = useSelector(portfolioSelector);
    console.log('portfolio', portfolio);
    return (
        <Grid container className={styles.home_wrapper}>
            <Grid item md={12} className={styles.video_container}>
                <video
                    loop
                    autoPlay
                    src={videoHomePage && videoHomePage}/>
            </Grid>

            <Grid container className={styles.catalog} id="series">
                <Typography className={styles.series_title}>
                    Серии:
                </Typography>
                <Catalog portfolio={portfolio}/>
            </Grid>

            <Contacts/>
        </Grid>
    )
}