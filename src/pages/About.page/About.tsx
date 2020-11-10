import React from "react";
import styles from './about.module.scss';
import {Grid, Typography} from "@material-ui/core";

export const AboutPage = () => {
    return (
        <Grid container className={styles.about_wrapper}>
            <Grid item md={6} className={styles.avatar_container}>
                <section className={styles.img_container}>
                    <img src="/assets/images/aboutPage/avatar.jpg" alt=""/>
                </section>
            </Grid>
            <Grid item md={6} className={styles.description_container}>
                <Typography className={styles.title}>
                    Приветствую Вас, дорогие друзья!
                </Typography>
                <Typography className={styles.description}>
                    Привет, дорогие друзья))) Меня зовут Григоренко Сергей, и я фотограф. Моя страсть, профессия,
                    жизнь - все это ваши фотографии. Я обожаю снимать самые счастливые и радостные дни вашей жизни.
                    Нет ничего прекраснее, чем улыбающиеся, искренние и добрые люди. Именно такие моменты я запечатлю
                    для вас. Свадьбы, семейные праздники, прогулки, любые события - я смогу подарить вам яркие
                    воспоминания, которые будут вызывать только положительные эмоции.
                </Typography>
            </Grid>
        </Grid>
    )
}