const nodemailer = require("nodemailer");

async function mailSender(to, subject, html) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to,
        subject,
        html,
    });
}

module.exports = mailSender;
