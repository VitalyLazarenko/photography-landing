import {Photo} from "./Photo";

export class Series {
    _id: string;
    title?: string;
    subTitle?: string;
    preview?: string;
    photos?: Photo[];

    constructor(data: any) {
        this._id = data.sys.id;
        this.title = data.fields.title ? data.fields.title : undefined;
        this.subTitle = data.fields.sub_title ? data.fields.sub_title : undefined;
        this.preview = data.fields.preview.fields.file.url ? data.fields.preview.fields.file.url : undefined;
        this.photos = data.fields.photos.length > 0 ? data.fields.photos.map((el: any) => new Photo(el)) : undefined;
    }
}