export class AboutMePage {
    title: string;
    avatar: string;
    description: string;
    videoOverview?: string;

    constructor(data: any) {
        this.title = data.fields.title;
        this.description = data.fields.description;
        this.avatar = data.fields.avatar ? data.fields.avatar.fields.file.url : undefined;
        this.videoOverview = data.fields.video_overview ? data.fields.video_overview.fields.file.url : undefined;
    }
}