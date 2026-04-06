import { NextResponse } from "next/server";

import { IMailService } from "./interfaces/IMailService";
import { GmailSender } from "./mailService/GmailSender";
import { SystemEmailTemplate } from "./mailTemplate/SystemEmailTemplate";
import { ClientEmailTemplate } from "./mailTemplate/ClientEmailTemplate";
import { getEmailTranslations } from "./emailTranslations";
import { TFormData } from "@/types/formData.type";

export async function POST(req: Request) {
  const body: TFormData = await req.json();


  const clientEmail = body.email
  const clientName = body.name

  const adminEmail = process.env.SMTP_USER
  const tr = getEmailTranslations(body.locale)


  try {

    // mail servise
    const gmailSender: IMailService = new GmailSender();

    // Create gmail template
    const systemEmailTemplate = new SystemEmailTemplate(body);
    const clientEmailTemplate = new ClientEmailTemplate(body);



    const adminGmailInfo = {
      from: `"Website Form" <${adminEmail}>`,
      to: `${adminEmail}`,
      subject: tr.adminSubject(clientName),
      template: systemEmailTemplate,
    }

    const clientGmailInfo = {
      from: `"Nipporia" <${adminEmail}>`,
      to: clientEmail,
      subject: tr.clientSubject,
      template: clientEmailTemplate,
    }

    await gmailSender.send(adminGmailInfo);
    await gmailSender.send(clientGmailInfo);

    return NextResponse.json({ success: true });

  } catch (error) {

    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Error sending email", },
      { status: 500 }
    );
  }
}
