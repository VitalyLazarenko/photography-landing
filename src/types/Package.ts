export class Package {
    title?: string;
    consultation?: string;
    workingHours?: string;
    description?: string;
    packing?: string;
    photoBook?: string;
    deadlines?: string;

    constructor(data: any) {
        this.title = data.fields.title ? data.fields.title : undefined;
        this.consultation = data.fields.consultation ? data.fields.consultation : undefined;
        this.workingHours = data.fields.working_hours ? data.fields.working_hours : undefined;
        this.description = data.fields.description ? data.fields.description : undefined;
        this.packing = data.fields.packing ? data.fields.packing : undefined;
        this.photoBook = data.fields.photo_book ? data.fields.photo_book : undefined;
        this.deadlines = data.fields.deadlines ? data.fields.deadlines : undefined;
    }
}