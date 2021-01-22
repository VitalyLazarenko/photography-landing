import React from "react";
import styles from './SeriesPage.module.scss';
import {createStyles, Grid, GridList, GridListTile, makeStyles, Theme, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectSeriesSelector} from "../../redux/app.module";
import {Contacts} from "../../components";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: "100%",
            height: 'auto',
        },
    }),
);

export const SeriesPage: React.FC = () => {
    const classes = useStyles();
    const content = useSelector(selectSeriesSelector);
    let count = 6;
    let count2 = 10;

    const cols = (index: number) => {
        if (index === 0) {
            return 2;
        }

        if (index === count) {
            count = count + index;
            return 2;
        }

        if (index === count2) {
            count2 = count2 + index;
            return 2;
        }

        return 1;
    }

    return (
        <Grid container className={styles.series_wrapper}>
            <Grid item md={12} className={styles.title_container}>
                <Typography className={styles.title}>{content && content.title}</Typography>
                <Typography className={styles.subtitle}>{content && content.subTitle}</Typography>
            </Grid>

            <Grid item md={12} className={styles.photo_wrapper}>
                <div className={classes.root}>
                    {
                        content && content.photos &&
                        <GridList cellHeight={160} className={classes.gridList} cols={3}>
                            {content.photos.map((photo, index) => {
                                console.log(index);
                                return (
                                    <GridListTile key={index} cols={cols(index)} className={styles.photo_container}>
                                        <img src={photo} alt=""/>
                                    </GridListTile>
                                )
                            })}
                        </GridList>
                    }
                </div>
            </Grid>

            <Contacts/>
        </Grid>
    )
}