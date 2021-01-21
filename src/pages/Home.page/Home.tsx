import React from "react";
import styles from './Home.module.scss';
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import {portfolioSelector, videoHomePageSelector} from "../../redux/app.module";
import {Catalog} from "../../components/Catalog.component/Catalog";

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

            <Grid container className={styles.catalog} id="portfolio">
                <Catalog portfolio={portfolio}/>
            </Grid>
        </Grid>
    )
}