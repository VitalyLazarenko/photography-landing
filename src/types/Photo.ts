export class Photo {
    key: string;
    src: string;
    size: number;
    width: number;
    height: number;

    constructor(data: any) {
        this.key = data.sys.id;
        this.src = data.fields.file.url;
        this.size = data.fields.file.details.size;
        this.width = data.fields.file.details.image.width;
        this.height = data.fields.file.details.image.height;
    }
}