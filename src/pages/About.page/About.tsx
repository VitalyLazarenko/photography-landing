import React from "react";
import styles from './About.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {aboutMePageSelector} from "../../redux/app.module";
import {Contacts} from "../../components";

export const AboutPage = () => {
    const content = useSelector(aboutMePageSelector);


    return (
        <Grid container className={styles.about_wrapper}>
            <Grid container className={styles.about_container}>
                <Grid item md={6} className={styles.avatar_container}>
                    <section className={styles.img_container}>
                        <img src={content && content.avatar} alt=""/>
                    </section>
                </Grid>
                <Grid item md={6} className={styles.description_container}>
                    <Typography className={styles.title}>
                        {content && content.title}
                    </Typography>
                    <Typography className={styles.description}>
                        {content && content.description}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container className={styles.overview_container}>
                //TODO create overview for grigorenko
            </Grid>

            <Grid item md={12} className={styles.video_container}>
                <video src={content && content.videoOverview} controls preload="auto"/>
            </Grid>

            {/*//TODO need create next container with info*/}

            <Contacts/>
        </Grid>
    )
}