import React from "react";
import styles from './price.module.scss';
import {Grid, Typography} from "@material-ui/core";

export const PricePage = () => {
    return (
        <Grid container className={styles.price_wrapper}>
            <Grid item md={12} className={styles.image_container}>
                <img src="/assets/images/PricePage/photo.jpg" alt=""/>
            </Grid>

            <Grid item md={10} className={styles.card_container}>
                <Grid item md={12} className={styles.title_container}>
                    <Typography className={styles.title}>Услуги</Typography>
                </Grid>

                <Grid item md={4} className={styles.card}>
                    <section className={styles.title_container}>
                        <Typography className={styles.title}>Пакет «Минимум»</Typography>
                    </section>
                    <section className={styles.description_container}>
                        <Typography className={styles.text}>Встреча с молодоженами, консультация по всем
                            вопросам.</Typography>
                    </section>
                    <section className={styles.description_container}>
                        <Typography className={styles.text}>Фотосъемка до 15 часов. Команда из двух
                            фотографов.</Typography>
                    </section>
                    <section className={styles.description_container}>
                        <Typography className={styles.text}>750 и более обработанных фотографий в дизайнерской
                            упаковке.</Typography>
                    </section>
                    <section className={styles.description_container}>
                        <Typography className={styles.text}>
                            В подарок деревянная коробочка с флешкой и 15
                            напечатанных фото размером 10х15. Фото в полном размере для печати широкоформатных
                            фотографий и уменьшенные копии всех фотографий.
                        </Typography>
                    </section>
                    <section className={styles.description_container}>
                        <Typography className={styles.text}>Фотокнига 30х30см и двe миникнижки 19х19см для
                            родителей.</Typography>
                    </section>
                    <section className={styles.description_container}>
                        <Typography className={styles.text}>Сроки:</Typography>
                    </section>
                    <section className={styles.description_container}>
                        <Typography className={styles.text}>от 2х недель до 3 месяцев.</Typography>
                    </section>
                </Grid>
            </Grid>
        </Grid>
    )
}