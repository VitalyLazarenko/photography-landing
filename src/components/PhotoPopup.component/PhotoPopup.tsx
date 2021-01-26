import React from 'react';
import {Dialog, DialogContent} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectedPhotoSelector, showPhotoPopupSelector} from "../../redux/app.module";

export const PhotoPopup = () => {
    const open = useSelector(showPhotoPopupSelector);
    const selected = useSelector(selectedPhotoSelector);

    console.log('POPUP STATE: ', {
        opne: open,
        selected: selected
    })

    const handleClose = () => {

    };

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>

                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}