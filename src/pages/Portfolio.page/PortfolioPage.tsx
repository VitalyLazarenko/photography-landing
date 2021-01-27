import React from 'react';
import styles from './PortfolioPage.module.scss';
import {useSelector} from "react-redux";
import {otherPortfolioSelector} from "../../redux/app.module";
import {Grid, Typography} from "@material-ui/core";
import {Contacts, PhotoGallery} from "../../components";

export const PortfolioPage = () => {
    const portfolio = useSelector(otherPortfolioSelector);

    return (
        <Grid container className={styles.wrapper}>
            <Grid item md={12} className={styles.title_container}>
                <Typography className={styles.subtitle}>Со Мной У Вас Появится История Любви, Счастья И Всех Самых Главных, Ярких И Нужных Моментов В Жизни. Мои Фото Получаются Искренними И Живыми. Каждый Раз При Просмотре У Вас Будут Пробуждаться Те Же Чувства, Что И В День Съемки. Именно Это Я Считаю Бесценным В Работе Фотографа И Всегда Отдаюсь Ей До Конца.</Typography>
            </Grid>

            {portfolio && <PhotoGallery images={portfolio}/>}

            <Contacts/>
        </Grid>
    )
}