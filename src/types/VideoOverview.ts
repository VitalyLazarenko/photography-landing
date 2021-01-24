export class VideoOverview {
    title: string;
    description?: string;
    video?: string;

    constructor(data: any) {
        this.title = data.title;
        this.description = data.description ? data.description : undefined;
        this.video = data.video ? data.video.fields.file.url : undefined;
    }
}