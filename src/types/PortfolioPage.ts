import {Photo} from "./Photo";

export class PortfolioPage {
    title: string;
    subtitle: string;
    photos?: Photo[];

    constructor(data : any) {
        this.title = data.fields.title;
        this.subtitle = data.fields.subtitle;
        this.photos = data.fields.photos ? data.fields.photos.map((el: any) => new Photo(el)) : undefined;
    }
}