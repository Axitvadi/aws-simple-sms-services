const express = require('express')
const router = express.Router()

const transporter = require('../config/emailTransporter')
const sesClient = require('../config/sesClient')
const createSendEmailCommand = require('../config/emailCommand')

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server successfully up and running"
    })
})

router.post('/send-email', async (req, res) => {
    try {

        const { email } = req.body

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Email Services" <axitvadi@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "IT services", // Subject line
            // text: "Hello world?", // plain text body
            html: "<b>Welcome to our platform</b>", // html body
        });


        res.status(200).json({
            success: true,
            data: info.messageId,
            message: "Message Successfully sended using aws SES service"
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
})

router.post('/send-email-sdk', async (req, res) => {
    try {

        const { email } = req.body

        const sendEmailCommand = createSendEmailCommand(
            email,
            "contact@shivbhavaniimpex.com"
          );

        const info =  await sesClient.send(sendEmailCommand)


        res.status(200).json({
            success: true,
            data: info.MessageId,
            message: "Message Successfully sended using aws SES service"
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
})

module.exports = router
