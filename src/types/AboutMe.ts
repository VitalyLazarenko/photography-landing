export class AboutMe {
    aboutMeTitle?: string;
    aboutMeDescription?: string;
    aboutMeVideo?: string;

    constructor(data: any) {
        this.aboutMeTitle = data.about_me_title ? data.about_me_title : undefined;
        this.aboutMeDescription = data.about_me ? data.about_me : undefined;
        this.aboutMeVideo = data.video_about_me ? data.video_about_me.fields.file.url : undefined;
    }
}