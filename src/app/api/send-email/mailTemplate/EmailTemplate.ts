import { IMailTemplate } from "../interfaces/IMailTemplate";

export abstract class EmailTemplate implements IMailTemplate {

    protected addField = (label: string, value: string | undefined, user?: boolean) => {
        if (user === true) {
            return value && value.trim() !== ""
                ? `<li><strong>${label}:</strong> ${value.replace(/\n/g, "<br>")}</li>`
                : "";
        } else {
            return value && value.trim() !== ""
                ? `<p><strong>${label}:</strong> ${value.replace(/\n/g, "<br>")}</p>`
                : "";
        }
    };

    abstract generateHtml(): string
}
