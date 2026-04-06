import { TFormData } from "@/types/formData.type";
import { EmailTemplate } from "./EmailTemplate";
import { getEmailTranslations } from "../emailTranslations";

export class ClientEmailTemplate extends EmailTemplate {
    private readonly data: TFormData;
    private readonly locale: string;

    constructor(data: TFormData) {
        super();
        this.data = data;
        this.locale = data.locale || "en";
    }

    generateHtml() {
        const tr = getEmailTranslations(this.locale);
        const isRTL = this.locale === "ar";
        const dir = isRTL ? 'dir="rtl"' : '';

        return `
            <div ${dir}>
                <h2>${tr.clientGreeting(this.data.name)}</h2>
                <p>${tr.clientIntro}</p>

                <p>${tr.clientAutoReplyNote}<br />
                ${tr.clientReplyTime}<br />
                ${tr.clientUrgent}</p>

                <p><strong>${tr.clientInquiryLabel}</strong></p>

                <ul style="list-style: none; padding: 0; margin: 20px 0;">
                    ${this.addField(tr.fields.company, this.data.company, true)}
                    ${this.addField(tr.fields.name, this.data.name, true)}
                    ${this.addField(tr.fields.email, this.data.email, true)}
                    ${this.addField(tr.fields.website, this.data.website, false)}
                    ${this.addField(tr.fields.message, this.data.message, true)}
                </ul>

                <p>${tr.clientClosing}</p>
                <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
                <div style="font-size: 13px; color: #555;">
                    ◇ ◆ <strong>Nipporia</strong> ◆ ◇<br>
                    Email: <a href="mailto:info@nipporia.com">info@nipporia.com</a><br>
                    <a href="https://nipporia.com">https://nipporia.com</a>
                </div>
            </div>
        `;
    }
}
