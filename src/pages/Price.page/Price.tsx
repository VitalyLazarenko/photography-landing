import React from "react";
import styles from './Price.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {
    imagePriceSelector,
    packagesSelector,
    packingVideoSelector,
    photoBookVideoSelector
} from "../../redux/app.module";
import {Package} from "../../types";
import {Contacts} from "../../components";

export const PricePage = () => {
    const image = useSelector(imagePriceSelector);
    const packages = useSelector(packagesSelector);
    const photoBookVideo = useSelector(photoBookVideoSelector);
    const packingVideo = useSelector(packingVideoSelector);

    console.log('pricePage', {
        book: photoBookVideo,
        packing: packingVideo
    });

    return (
        <Grid container className={styles.price_wrapper}>
            <Grid item md={12} className={styles.image_container}>
                <img src={image && image} alt=""/>
            </Grid>

            <Grid item md={8} className={styles.card_container}>
                <Grid item md={12} className={styles.title_wrapper}>
                    <Typography className={styles.title}>Услуги</Typography>
                </Grid>

                <Grid container className={styles.card_wrapper}>
                    {
                        packages && packages.map((el: Package, index: number) => {
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
                photoBookVideo &&
                <Grid item md={12} className={styles.overview_container}>
                    <Grid item md={6} className={styles.video_container}>
                        <video src={photoBookVideo.video} controls preload="auto"/>
                    </Grid>

                    <Grid item md={6} className={styles.description_video}>
                        <Typography className={styles.video_title}>{photoBookVideo.title}</Typography>
                        <Typography className={styles.video_description}>{photoBookVideo.description}</Typography>
                    </Grid>
                </Grid>
            }

            {
                packingVideo &&
                <Grid item md={12} className={styles.overview_container}>
                    <Grid item md={6} className={styles.description_video}>
                        <Typography className={styles.video_title}>{packingVideo.title}</Typography>
                        <Typography className={styles.video_description}>{packingVideo.description}</Typography>
                    </Grid>

                    <Grid item md={6} className={styles.video_container}>
                        <video src={packingVideo.video} controls preload="auto"/>
                    </Grid>
                </Grid>
            }
            <Contacts/>
        </Grid>
    )
}