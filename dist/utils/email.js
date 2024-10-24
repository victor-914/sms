import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "okaforchineduvictornako@gmail.com",
        pass: "bdpmjiexysqlzudi",
    },
});
const generateEmailTemplate = (type, name, link) => {
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
export const sendLeads = async (subject, message) => {
    const mailOptions = {
        to: "contact@cognixtech.org",
        subject,
        message,
    };
    await transporter.sendMail(mailOptions);
};
export const sendEmail = async (type, name, to, subject, link) => {
    const htmlContent = generateEmailTemplate(type, name, link);
    const mailOptions = {
        from: "okaforchineduvictornako@gmail.com",
        to,
        subject,
        html: htmlContent,
    };
    await transporter.sendMail(mailOptions);
};
export const sendStaffIdToken = async (to, subject, token, school) => {
    const htmlContent = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${school}  identity token for staff registration</title>
    </head>
    <body>
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0;">
      <p>Hello ${to},</p>
        <p>Thank you for signing up for our service. Please use the token  below to register as a staff.</p>
        <h3>
         ${token}
        </h3>
        <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
        <p>Best Regards,<br />The Company Team</p>
      </div>
    </body>
  </html>`;
    const mailOptions = {
        from: "okaforchineduvictornako@gmail.com",
        to,
        subject,
        html: htmlContent,
    };
    await transporter.sendMail(mailOptions);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZW1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0sWUFBWSxDQUFDO0FBRXBDLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDN0MsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLG1DQUFtQztRQUN6QyxJQUFJLEVBQUUsa0JBQWtCO0tBQ3pCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDekUsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNiLEtBQUssUUFBUTtZQUNYLE9BQU87Ozs7Ozs7Ozs7MEJBVWEsSUFBSTs7eUJBRUwsSUFBSTs7Ozs7O09BTXRCLENBQUM7UUFFSixLQUFLLFFBQVE7WUFDWCxPQUFPOzs7Ozs7Ozs7OzBCQVVhLElBQUk7O3lCQUVMLElBQUk7Ozs7OztPQU10QixDQUFDO1FBRUosS0FBSyxPQUFPO1lBQ1YsT0FBTzs7Ozs7Ozs7OzswQkFVYSxJQUFJOzs7Ozs7T0FNdkIsQ0FBQztRQUVKO1lBQ0UsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBR0YsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLEtBQUssRUFDNUIsT0FBZSxFQUNmLE9BQWUsRUFFZixFQUFFO0lBRUYsTUFBTSxXQUFXLEdBQUc7UUFDakIsRUFBRSxFQUFDLHdCQUF3QjtRQUM1QixPQUFPO1FBQ1AsT0FBTztLQUNSLENBQUM7SUFFRixNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLEtBQUssRUFDNUIsSUFBWSxFQUNaLElBQVksRUFDWixFQUFVLEVBQ1YsT0FBZSxFQUNmLElBQVksRUFDWixFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU1RCxNQUFNLFdBQVcsR0FBRztRQUNsQixJQUFJLEVBQUUsbUNBQW1DO1FBQ3pDLEVBQUU7UUFDRixPQUFPO1FBQ1AsSUFBSSxFQUFFLFdBQVc7S0FDbEIsQ0FBQztJQUVGLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLEVBQ25DLEVBQVUsRUFDVixPQUFlLEVBQ2YsS0FBYSxFQUNiLE1BQWMsRUFDZCxFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUc7Ozs7O2VBS1AsTUFBTTs7OztpQkFJSixFQUFFOzs7V0FHUixLQUFLOzs7Ozs7VUFNTixDQUFDO0lBRVQsTUFBTSxXQUFXLEdBQUc7UUFDbEIsSUFBSSxFQUFFLG1DQUFtQztRQUN6QyxFQUFFO1FBQ0YsT0FBTztRQUNQLElBQUksRUFBRSxXQUFXO0tBQ2xCLENBQUM7SUFFRixNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDIn0=