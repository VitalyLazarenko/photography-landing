import React from "react";
import styles from './Home.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {homePageSelector} from "../../redux/app.module";
import {Catalog, Contacts} from "../../components";

export const HomePage = () => {
    const content = useSelector(homePageSelector);

    return (
        <Grid container className={styles.home_wrapper}>
            <Grid item md={12} className={styles.video_container}>
                <video
                    loop
                    autoPlay
                    src={content && content.videoBunner}/>
            </Grid>

            <Grid container className={styles.catalog} id="series">
                <Typography className={styles.series_title}>
                    Series
                </Typography>
                <Catalog portfolio={content && content.series}/>
            </Grid>

            <Contacts/>
        </Grid>
    )
}