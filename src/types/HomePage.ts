import {Series} from "./Series";

export class HomePage {
    videoBunner?: string;
    series?: Series[];

    constructor(data: any) {
        this.videoBunner = data.fields.video_bunner ? data.fields.video_bunner.fields.file.url : undefined;
        this.series = data.fields.series ? data.fields.series.map((el: any) => new Series(el)) : undefined;
    }
}