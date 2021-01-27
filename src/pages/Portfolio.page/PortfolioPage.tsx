import React from 'react';
import styles from './PortfolioPage.module.scss';
import {useSelector} from "react-redux";
import {portfolioPageSelector} from "../../redux/app.module";
import {Grid, Typography} from "@material-ui/core";
import {Contacts, PhotoGallery} from "../../components";

export const PortfolioPage = () => {
    const content = useSelector(portfolioPageSelector);

    return (
        <Grid container className={styles.wrapper}>
            {
                content &&
                <Grid item md={12} className={styles.title_container}>
                    <Typography className={styles.title}>{content.title}</Typography>
                    <Typography className={styles.subtitle}>{content.subtitle}</Typography>
                </Grid>
            }

            {content && content.photos && <PhotoGallery images={content.photos}/>}

            <Contacts/>
        </Grid>
    )
}