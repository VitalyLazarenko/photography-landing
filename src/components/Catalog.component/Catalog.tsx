import React from "react";
import styles from './Catalog.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {Series} from "../../types";
import {useDispatch} from "react-redux";
import {changeControls} from "../../redux/action.creators/app.actions";
import history from "../../utils/history";
import Routes from '../../app.router/router.constants';
import {Link} from "react-router-dom";

interface ICatalogProps {
    portfolio?: Series[];
}

export const Catalog: React.FC<ICatalogProps> = ({portfolio}) => {
    const dispatch = useDispatch();

    const handleClickSelected = (series: Series) => {
        dispatch(changeControls({name: "selectSeries", value: series}));
    }

    return (
        <Grid container spacing={1} className={styles.wrapper}>
            {
                portfolio && portfolio.map((el: Series) => (
                    <Grid item md={3}  onClick={() => handleClickSelected(el)}>
                        <Link to={Routes.SeriesPage} className={styles.series_card}>
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