import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log("here");

  const formData = await request.json();

  console.log(formData);

  try {
    const { data, error } = await resend.emails.send({
      from: "quote@creolepro.com",
      to: ["patricedouge@gmail.com", "quote@creolepro.com"],
      subject: "New Quote Request",
      react: EmailTemplate({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        description: formData.description,
      }) as React.ReactElement,
    });

    if (error) {
      console.log(error);
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
