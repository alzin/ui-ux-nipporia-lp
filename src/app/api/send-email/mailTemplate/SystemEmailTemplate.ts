import { TFormData } from "@/types/formData.type";

// interfaces
import { EmailTemplate } from "./EmailTemplate";

export class SystemEmailTemplate extends EmailTemplate {
    private readonly data: TFormData;

    constructor(data: TFormData) {
        super();
        this.data = data;
    }

    generateHtml(): string {
        return `
        <h2>新しいWebサイト制作のお問い合わせが届きました</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                ${this.addField("会社名", this.data.company)}
                ${this.addField("お名前", this.data.name)}
                ${this.addField("メールアドレス", this.data.email)}
                ${this.addField("現在のWebサイトURL", this.data.website)}
                ${this.addField("お悩み・ご要望", this.data.message)}
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
            
            <p><strong>送信日時:</strong> ${new Date().toLocaleString('ja-JP')}</p>
            <p><em>このメールは自動送信されました。速やかにお客様へのご連絡をお願いいたします。</em></p>
        `;
    }
}

