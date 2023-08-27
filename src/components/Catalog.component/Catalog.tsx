import React from "react";
import styles from './Catalog.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {Series} from "../../types";
import {useDispatch} from "react-redux";
import {changeControls} from "../../redux/action.creators/app.actions";
import {Link} from "react-router-dom";
import {Routes} from "../../app.router";

interface ICatalogProps {
    portfolio?: Series[];
}

export const Catalog: React.FC<ICatalogProps> = ({portfolio}) => {
    const dispatch = useDispatch();

    const handleClickSelected = (series: Series) => {
        dispatch(changeControls({name: "selectSeries", value: series}));
    }

    return (
        <Grid container spacing={2} className={styles.wrapper}>
            {
                portfolio && portfolio.map((el: Series, index) => (
                    <Grid item md={4} key={index} onClick={() => handleClickSelected(el)}>
                        <Link to={`${Routes.SeriesPage}/:${el._id}`} className={styles.series_card}>
                        <section className={styles.img_container}>
                            <img src={el.preview} alt=""/>
                        </section>
                        <Typography className={styles.title}>{el.title}</Typography>
                        </Link>
                    </Grid>
                ))
            }
        </Grid>
    )
}
