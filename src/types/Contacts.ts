export class Contacts {
    title: string;
    description: string;
    link_instagram?: string;
    link_viber?: string;
    link_telegram?: string;
    link_watsapp?: string;
    phone_number?: string;

    constructor(data: any) {
        this.title = data.fields.title;
        this.description = data.fields.description;
        this.link_instagram = data.fields.link_instagram ? data.fields.link_instagram : undefined;
        this.link_viber = data.fields.link_viber ? data.fields.link_viber : undefined;
        this.link_telegram = data.fields.link_telegram ? data.fields.link_telegram : undefined;
        this.link_watsapp = data.fields.link_watsapp ? data.fields.link_watsapp : undefined;
        this.phone_number = data.fields.phone_number ? data.fields.phone_number : undefined;
    }
}