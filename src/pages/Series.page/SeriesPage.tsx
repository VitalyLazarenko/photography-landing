import React, {useEffect} from "react";
import styles from './SeriesPage.module.scss';
import {Grid,Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectSeriesSelector, seriesSelector} from "../../redux/app.module";
import {Contacts, PhotoGallery} from "../../components";
import {Series} from "../../types";
import {changeControls} from "../../redux/action.creators/app.actions";
import { useParams } from "react-router-dom";

export const SeriesPage: React.FC = () => {

    let { sid } = useParams();
    const dispatch = useDispatch();
    const series = useSelector(seriesSelector);
    const selectedSeries = useSelector(selectSeriesSelector);


    useEffect(() => {
        if (series) {
            const selectedSeries = series.find((el: Series) => el._id === sid.slice(1));
            selectedSeries && dispatch(changeControls({name: "selectSeries", value: selectedSeries}));
        }
    }, [sid, series, dispatch]);

    return (
        <Grid container className={styles.series_wrapper}>
            <Grid item md={12} className={styles.title_container}>
                <Typography className={styles.title}>{selectedSeries && selectedSeries.title}</Typography>
                <Typography className={styles.subtitle}>{selectedSeries && selectedSeries.subTitle}</Typography>
            </Grid>

            <Grid item md={12} className={styles.photo_wrapper}>
                {selectedSeries && selectedSeries.photos && <PhotoGallery images={selectedSeries.photos}/>}
            </Grid>

            <Contacts/>
        </Grid>
    )
}