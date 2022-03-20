import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer'
import type { AddEmailAccount, IMessage } from '../components/Email/AddEmail'


export class MailNodemailerProvider implements AddEmailAccount {
    private readonly transporter: Mail
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.HOSTNAME,
            port: 465,
            auth: {
                user: process.env.USER_NAME,
                pass: process.env.USER_PASSWORD,
            }
        })
    }

    async sendEmail(message: IMessage): Promise<void> {

        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })

    }


}
