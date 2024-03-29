import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  description,
}) => (
  <div>
    <h1>New Quote Request: </h1>

    <p>
      Name: {firstName} {lastName} <br />
      Email: {email} <br />
      Description: {description}
    </p>
  </div>
);
