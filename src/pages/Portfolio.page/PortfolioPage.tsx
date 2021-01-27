import React from 'react';
import styles from './PortfolioPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {otherPortfolioSelector} from "../../redux/app.module";
import {createStyles, GridList, GridListTile, makeStyles, Theme} from "@material-ui/core";
import {changeControls} from "../../redux/action.creators/app.actions";

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

export const PortfolioPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const photos = useSelector(otherPortfolioSelector);

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
    };

    const handleClickPhoto = (photo: string) => {
        dispatch(changeControls({name: "showPhotoPopup", value: true}))
        dispatch(changeControls({name: "selectedPhoto", value: {
                photo: photo,
                series: photos
            }}))
    };

    return (
        <div className={styles.wrapper}>
            <div className={classes.root}>
                {
                    photos &&
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {photos.map((photo, index) => {
                            return (
                                <GridListTile
                                    key={index}
                                    cols={cols(index)}
                                    className={styles.photo_container}
                                    onClick={() => handleClickPhoto(photo)}
                                >
                                    <img src={photo} alt=""/>
                                </GridListTile>
                            )
                        })}
                    </GridList>
                }
            </div>
        </div>
    )
}