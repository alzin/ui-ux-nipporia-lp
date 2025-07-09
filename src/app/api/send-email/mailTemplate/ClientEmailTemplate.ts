import { TFormData } from "@/types/formData.type";

// interfaces
import { EmailTemplate } from "./EmailTemplate";

export class ClientEmailTemplate extends EmailTemplate {
    private readonly data: TFormData;

    constructor(data: TFormData) {
        super();
        this.data = data;
    }

    generateHtml() {
        return `
            <h2>${this.data.name}様</h2>
            <p>お問い合わせいただきありがとうございます。<br />
            Webサイト制作サービスへのお問い合わせを受け付けいたしました。</p>

            <p>このメールはお問い合わせの受付をお知らせする自動返信メールです。<br />
            お問い合わせいただいた内容につきましては、担当者より24時間以内にご連絡いたします。<br />
            お急ぎの場合は、お電話でのお問合わせも受け付けております。</p>

            <p><strong>お問い合わせ内容:</strong></p>
            
            <ul style="list-style: none; padding: 0; margin: 20px 0;">
                ${this.addField("会社名", this.data.company, true)}
                ${this.addField("お名前", this.data.name, true)}
                ${this.addField("メールアドレス", this.data.email, true)}
                ${this.addField("現在のWebサイトURL", this.data.website, false)}
                ${this.addField("お悩み・ご要望", this.data.message, true)}
            </ul>

            <p>今後ともよろしくお願いいたします。</p>
            <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
            <div style="font-size: 13px; color: #555;">
                ◇ ◆ <strong>Webサイト制作・デザインサービス</strong> ◆ ◇<br>
                <strong>Nipporia</strong><br>
                〒000-0000 東京都渋谷区〇〇-〇-〇<br>
                Email: <a href="mailto:info@nipporia.com">info@nipporia.com</a><br>
                <a href="https://web.nipporia.com">https://web.nipporia.com</a>
            </div>
        `;
    }
}
