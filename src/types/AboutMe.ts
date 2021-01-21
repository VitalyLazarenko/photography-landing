export class AboutMe {
    title?: string;
    description?: string;
    video?: string;

    constructor(data: any) {
        this.title = data.about_me_title ? data.about_me_title : undefined;
        this.description = data.about_me ? data.about_me : undefined;
        this.video = data.video_about_me ? data.video_about_me.fields.file.url : undefined;
    }
}