import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();
const { GMAIL_EMAIL, GMAIL_PASSWORD } = process.env;

export default async function handler(req, res) {
    try {
        const body = await req.body;
        const toHtml = `<div>
                            <h4>Information</h4>
                            <table>
                            <tr>
                                <td>Name</td>
                                <td>${body.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>${body.email}</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>${body.contact}</td>
                            </tr>
                            <tr>
                                <td>Service</td>
                                <td>${body.service}</td>
                            </tr>
                            <tr>
                                <td>IsAggred</td>
                                <td>${body.isAgreed}</td>
                            </tr>
                            </table>
                        </div>`;

        await sendEmail("digitalageeu@gmail.com", toHtml, `Contact Requested By ${body.email}`);
        return res
            .status(200)
            .json({ status: "Mail sent" });

    } catch (error) {
        return res.status(500).json({ status: error });
    }
}

async function sendEmail(toSend, toHtml, toSubject) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        auth: {
            user: GMAIL_EMAIL,
            pass: GMAIL_PASSWORD,
        },
    });

    let details = {
        from: GMAIL_EMAIL,
        to: toSend,
        subject: toSubject,
        text: toHtml,
        html: toHtml,
    };

    const checkedEmail = await transporter.sendMail(details);
    return checkedEmail;
}