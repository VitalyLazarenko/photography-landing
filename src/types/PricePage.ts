import {Package} from "./Package";

export class PricePage {
    imageBunner?: string;
    packages?: Package[];

    photoBookTitile?: string;
    photoBookOverview?: string;
    videoPhotoBookOverview?: string;

    packingOverviewTitle?: string;
    packingOverview?: string;
    videoPackingOverview?: string;

    constructor(data: any) {
        this.imageBunner = data.fields.image_bunner ? data.fields.image_bunner.fields.file.url : undefined;
        this.packages = data.fields.packages ? data.fields.packages.map((el: any) => new Package(el)) : undefined;

        this.photoBookTitile = data.fields.photo_book_overview_title ? data.fields.photo_book_overview_title : undefined;
        this.photoBookOverview = data.fields.photo_book_overview ? data.fields.photo_book_overview : undefined;
        this.videoPhotoBookOverview = data.fields.photo_book_overview_video ? data.fields.photo_book_overview_video.fields.file.url : undefined;

        this.packingOverviewTitle = data.fields.packing_overview_title ? data.fields.packing_overview_title : undefined;
        this.packingOverview = data.fields.packing_overview ? data.fields.packing_overview : undefined;
        this.videoPackingOverview = data.fields.packing_overview_video ? data.fields.packing_overview_video.fields.file.url : undefined;

    }
}