export default class Message {
    name: string;
    email: string;
    subject: string;
    message: string;

    constructor(data: any = {}) {
        this.name = data.name;
        this.email = data.email;
        this.subject = data.subject;
        this.message = data.message;
    }
}