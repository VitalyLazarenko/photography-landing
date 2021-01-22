import React from "react";
import styles from './About.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {aboutMeSelector, avatarSelector} from "../../redux/app.module";
import {Contacts} from "../../components";

export const AboutPage = () => {
    const avatar = useSelector(avatarSelector);
    const aboutMeContect = useSelector(aboutMeSelector);


    return (
        <Grid container className={styles.about_wrapper}>
            <Grid item md={6} className={styles.avatar_container}>
                <section className={styles.img_container}>
                    <img src={avatar} alt=""/>
                </section>
            </Grid>
            <Grid item md={6} className={styles.description_container}>
                <Typography className={styles.title}>
                    {aboutMeContect && aboutMeContect.title}
                </Typography>
                <Typography className={styles.description}>
                    {aboutMeContect && aboutMeContect.description}
                </Typography>
            </Grid>

            <Grid item md={12} className={styles.overview_container}>
                //TODO create overview for grigorenko
            </Grid>


            <Grid item md={12} className={styles.video_container}>
                <video src={aboutMeContect && aboutMeContect.video} controls preload="auto"/>
            </Grid>

            {/*//TODO need create next container with info*/}

            <Contacts/>
        </Grid>
    )
}