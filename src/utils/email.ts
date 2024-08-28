import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'okaforchineduvictornako@gmail.com',
        pass: 'bdpmjiexysqlzudi',
    },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: 'okaforchineduvictornako@gmail.com',
        to,
        subject,
        text,
    };

    await transporter.sendMail(mailOptions);
};
