import sgMail from "@sendgrid/mail"
import env from "../../config/env.var.config"
import { RequestHandler } from "express";

sgMail.setApiKey(env.sendGrid.api)

export const sendEmail : RequestHandler= async (req , res) => {
    const { email } = req.body;
    const msg = {
        to : email,
        from : 'ojas.ot4@gmail.com',
        subject : 'Restuarant Promo Code',
        text : 'Your Promo Code is: Q2gr0k',
        html : '<strong>Your Promo Code is: Q2gr0k</strong>',
        templateId : env.sendGrid.templateId,
    }
    try {
        await sgMail.send(msg);
        console.log('Email Sent');
        res.send(`Promo Code : Q2gr0k is send to ${email}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
}
