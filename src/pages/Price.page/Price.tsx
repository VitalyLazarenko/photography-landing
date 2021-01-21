import React from "react";
import styles from './Price.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {packagesSelector} from "../../redux/app.module";
import {Package} from "../../types";

export const PricePage = () => {
    const packages = useSelector(packagesSelector);

    return (
        <Grid container className={styles.price_wrapper}>
            <Grid item md={12} className={styles.image_container}>
                <img src="/assets/images/PricePage/photo.jpg" alt=""/>
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

            {/*//TODO create photobook overview*/}
        </Grid>
    )
}