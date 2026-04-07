import { TFormData } from "@/types/formData.type";
import { EmailTemplate } from "./EmailTemplate";
import { getEmailTranslations } from "../emailTranslations";

export class SystemEmailTemplate extends EmailTemplate {
    private readonly data: TFormData;
    private readonly locale: string;

    constructor(data: TFormData) {
        super();
        this.data = data;
        this.locale = data.locale || "ja";
    }

    generateHtml(): string {
        const tr = getEmailTranslations(this.locale);
        const isRTL = this.locale === "ar";
        const dir = isRTL ? 'dir="rtl"' : '';
        const localeTag = this.locale === "ja" ? "ja-JP" : this.locale === "ar" ? "ar-SA" : "en-US";

        return `
        <div ${dir}>
            <h2>${tr.adminHeading}</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                ${this.addField(tr.fields.company, this.data.company)}
                ${this.addField(tr.fields.name, this.data.name)}
                ${this.addField(tr.fields.email, this.data.email)}
                ${this.addField(tr.fields.website, this.data.website)}
                ${this.addField(tr.fields.message, this.data.message)}
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

            <p><strong>${tr.adminTimestamp}:</strong> ${new Date().toLocaleString(localeTag)}</p>
            <p><em>${tr.adminAutoSent}</em></p>
        </div>
        `;
    }
}
