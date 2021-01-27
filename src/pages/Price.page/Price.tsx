import React from "react";
import styles from './Price.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {pricePageSelector} from "../../redux/app.module";
import {Package} from "../../types";
import {Contacts} from "../../components";

export const PricePage = () => {
    const content = useSelector(pricePageSelector);

    return (
        <Grid container className={styles.price_wrapper}>
            <Grid item md={12} className={styles.image_container}>
                <img src={content && content.imageBunner} alt=""/>
            </Grid>

            <Grid item md={8} className={styles.card_container}>
                <Grid item md={12} className={styles.title_wrapper}>
                    <Typography className={styles.title}>Услуги</Typography>
                </Grid>

                <Grid container className={styles.card_wrapper}>
                    {
                        content && content.packages && content.packages.map((el: Package, index: number) => {
                            return (
                                <Grid key={index} item md={4} className={styles.card}>
                                    <section className={styles.card_container}>
                                        <section className={styles.title_container}>
                                            <Typography className={styles.title_name}>Пакет</Typography>
                                            <Typography className={styles.name}>{el.title}</Typography>
                                        </section>
                                        {
                                            el.consultation &&
                                            <section className={styles.description_container}>
                                                <Typography className={styles.text}>{el.consultation}</Typography>
                                            </section>
                                        }
                                        {
                                            el.workingHours &&
                                            <section className={styles.description_container}>
                                                <Typography className={styles.text}>{el.workingHours}</Typography>
                                            </section>
                                        }
                                        {
                                            el.description &&
                                            <section className={styles.description_container}>
                                                <Typography className={styles.text}>{el.description}</Typography>
                                            </section>
                                        }
                                        {
                                            el.packing &&
                                            <section className={styles.description_container}>
                                                <Typography className={styles.text}>{el.packing}</Typography>
                                            </section>
                                        }
                                        {
                                            el.photoBook &&
                                            <section className={styles.description_container}>
                                                <Typography className={styles.text}>{el.photoBook}</Typography>
                                            </section>
                                        }
                                        {
                                            el.deadlines &&
                                            <div>
                                                <section className={styles.description_container}>
                                                    <Typography className={styles.text_bold}>Сроки:</Typography>
                                                </section>
                                                <section className={styles.description_container}>
                                                    <Typography className={styles.text}>{el.deadlines}</Typography>
                                                </section>
                                            </div>
                                        }
                                        <section className={styles.description_container}>
                                            <button>Позвонить</button>
                                        </section>
                                    </section>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>


            {
                content && content.videoPhotoBookOverview &&
                <Grid item md={12} className={styles.overview_container}>
                    <Grid item md={6} className={styles.video_container}>
                        <video src={content.videoPhotoBookOverview} controls preload="auto"/>
                    </Grid>

                    <Grid item md={6} className={styles.description_video}>
                        <Typography className={styles.video_title}>{content.photoBookTitile}</Typography>
                        <Typography className={styles.video_description}>{content.photoBookOverview}</Typography>
                    </Grid>
                </Grid>
            }

            {
                content && content.videoPackingOverview &&
                <Grid item md={12} className={styles.overview_container}>
                    <Grid item md={6} className={styles.description_video}>
                        <Typography className={styles.video_title}>{content.packingOverviewTitle}</Typography>
                        <Typography className={styles.video_description}>{content.packingOverview}</Typography>
                    </Grid>

                    <Grid item md={6} className={styles.video_container}>
                        <video src={content.videoPackingOverview} controls preload="auto"/>
                    </Grid>
                </Grid>
            }
            <Contacts/>
        </Grid>
    )
}