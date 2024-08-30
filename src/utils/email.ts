import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "okaforchineduvictornako@gmail.com",
    pass: "bdpmjiexysqlzudi",
  },
});

const generateEmailTemplate = (type:string, name:string, link:string) => {
  switch (type) {
    case "verify":
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Verify Your Email</title>
          </head>
          <body>
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0;">
              <h2>Hello ${name},</h2>
              <p>Thank you for signing up for our service. Please click the button below to verify your email address.</p>
              <a href="${link}" style="display: block; width: fit-content; margin: 20px auto; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; text-align: center; border-radius: 5px; font-weight: bold;">Verify Email</a>
              <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
              <p>Best Regards,<br />The Company Team</p>
            </div>
          </body>
        </html>
      `;

    case "forgot":
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Reset Your Password</title>
          </head>
          <body>
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0;">
              <h2>Hello ${name},</h2>
              <p>We received a request to reset your password. Click the button below to proceed with the reset.</p>
              <a href="${link}" style="display: block; width: fit-content; margin: 20px auto; padding: 10px 20px; background-color: #f44336; color: #ffffff; text-decoration: none; text-align: center; border-radius: 5px; font-weight: bold;">Reset Password</a>
              <p>If you didn't request a password reset, please ignore this email or contact support.</p>
              <p>Best Regards,<br />The Company Team</p>
            </div>
          </body>
        </html>
      `;

    case "reset":
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Password Reset Successful</title>
          </head>
          <body>
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0;">
              <h2>Hello ${name},</h2>
              <p>Your password has been successfully reset. If you didn't perform this action, please contact support immediately.</p>
              <p>Best Regards,<br />The Company Team</p>
            </div>
          </body>
        </html>
      `;

    default:
      return "";
  }
};

export const sendEmail = async (type:string, name:string, to:string, subject:string, link:string) => {
  const htmlContent = generateEmailTemplate(type, name, link);

  const mailOptions = {
    from: "okaforchineduvictornako@gmail.com",
    to,
    subject,
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);
};
