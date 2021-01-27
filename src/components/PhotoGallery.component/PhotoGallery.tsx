import React, {useCallback} from 'react';
import Gallery from "react-photo-gallery";
import SelectedImage from "./selectedImage";
import {changeControls} from "../../redux/action.creators/app.actions";
import {useDispatch} from "react-redux";
import {Photo} from "../../types/Photo";

interface IGalleryProps {
    images: Photo[];
}

export const PhotoGallery:React.FC<IGalleryProps> = ({images}) => {
    const dispatch = useDispatch();

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo }) => (
            <SelectedImage
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
                handleOnClick={handleClickPhoto}
            />
        ),
        []
    );

    const handleClickPhoto = (photo: string) => {
        dispatch(changeControls({name: "showPhotoPopup", value: true}))
        dispatch(changeControls({
            name: "selectedPhoto", value: {
                photo: photo,
                series: images
            }
        }))
    };


    return (
        <Gallery photos={images} renderImage={imageRenderer} direction={"row"}/>
    )
}