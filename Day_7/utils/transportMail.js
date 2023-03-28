const nodemailer = require('nodemailer');

async function sendMail(to, message) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.ADMIN_EMAIL,
          pass: process.env.ADMIN_PASSWORD
        }
    });
    
    const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to,
        subject: '[VMO] MinhMV - Sending your password using Node.js',
        text: `Your password is ${message}.`
    };

    await transporter.sendMail(mailOptions, (err, info) => {
        if(err) console.error(err);
        else console.log('Email sent: ' + info.response);
    });
}

module.exports = sendMail;