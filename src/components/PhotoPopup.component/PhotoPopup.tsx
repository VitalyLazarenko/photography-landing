import React, {useEffect, useState} from 'react';
import styles from './PhotoPopup.module.scss';
import {Dialog, DialogContent} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectedPhotoSelector, showPhotoPopupSelector} from "../../redux/app.module";
import {changeControls} from "../../redux/action.creators/app.actions";
import {Photo} from "../../types/Photo";

export const PhotoPopup = () => {
    const dispatch = useDispatch();
    const open = useSelector(showPhotoPopupSelector);
    const content = useSelector(selectedPhotoSelector);
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | undefined>(undefined)

    console.log('POPUP STATE: ', {
        open: open,
        selected: content
    })

    useEffect(() => {
        content && setSelectedPhoto(content.photo);
    }, [content]);

    const handleClose = () => {
        dispatch(changeControls({name: "showPhotoPopup", value: false}));
        dispatch(changeControls({name: "selectedPhoto", value: undefined}));
    };

    const handleClickNext = () => {
        if (content && content.series && content.series.findIndex((el: Photo) => el.key === selectedPhoto?.key) === content.series.length - 1) {
            setSelectedPhoto(content.series[0]);
            return
        } else {
            if (content && content.series) {
                const result = content.series.findIndex((el: Photo) => el.key === selectedPhoto?.key);
                if (result !== -1 || result !== content.series.length) setSelectedPhoto(content.series[result + 1]);
            }
        }
    };

    const handleClickBack = () => {
        if (content && content.series && content.series.findIndex((el: Photo) => el.key === selectedPhoto?.key) === 0) {
            setSelectedPhoto(content.series[content.series.length - 1]);
            return
        } else {
            if (content && content.series) {
                const result = content.series.findIndex((el: Photo) => el.key === selectedPhoto?.key);
                if (result > 0) setSelectedPhoto(content.series[result - 1]);
            }
        }
    };

    const handleKeyDown = (e: any) => {
        if ("key" in e) {
            (e.key === "Escape" || e.key === "Esc") && handleClose();
        } else {
            (e.keyCode === 27) && handleClose();
        }

        if ("which" in e) {
            switch (e.which) {
                case 37: {
                    handleClickBack();
                    break;
                }
                case 39: {
                    handleClickNext();
                    break;
                }

                default : {
                    return
                }
            }
        }
    };

    return (
        <React.Fragment>
            <Dialog
                maxWidth="md"
                open={open}
                onBackdropClick={handleClose}
                onKeyDown={handleKeyDown}
                aria-labelledby="max-width-dialog-title"
                className={styles.photo_popup_wrapper}
                style={{borderRadius: 10}}
            >
                <DialogContent className={styles.dialog_content}>
                    <img
                        src={selectedPhoto?.src}
                        className={styles.image}
                        onClick={handleClickNext}
                        alt=""
                    />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}