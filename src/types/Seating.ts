export default class Seating {
    id: string;
    title: string;
    heading?: string;
    preview?: string;
    description?: string;
    gallery?: string[];
    serial: string;
    thumbnail?: string;
    angle_thumbnail?: string;
    entries?: string[];

    constructor(data: any = {}) {
        this.id = data.sys.id;
        this.title = data.fields.title;
        this.heading = data.fields.heading ? data.fields.heading : undefined;
        this.preview = data.fields.preview ? data.fields.preview.fields.file.url : undefined;
        this.description = data.fields.description ? data.fields.description : undefined;
        this.gallery = data.fields.gallery ? data.fields.gallery.map((el: any) => el.fields.file.url) : undefined;
        this.serial = data.fields.serial;
        this.thumbnail = data.fields.thumbnail ? data.fields.thumbnail.fields.file.url : undefined;
        this.angle_thumbnail = data.fields.angle_thumbnail ? data.fields.angle_thumbnail.fields.file.url : undefined;
        this.entries = data.fields.entries ? data.fields.entries.map((el: any) => el.sys.id) : undefined;
    }
}