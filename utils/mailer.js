const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 25,
    secure: false,
    auth: {
        user: "c729ff6cec7284",
        pass: "d8388cf2821e8b",
    },
});

module.exports = {
    sendmailFrogetPass: async function (to, URL) {
        return await transporter.sendMail({
            from: `NNPTUD@heeheheh`, // sender address
            to: to, // list of receivers
            subject: "MAIL MOI DU LICH CAM", // Subject line
            html: `<a href=${URL}>CLICK VAO DAY DE XEM VIEC NHE VOLT CAO</a>`, // html body
        });
    }
}