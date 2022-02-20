const ErrorResponse = require('../ultil/errorRespose')
const asyncHandler = require('../middleware/async')
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
       dotenv.config({path:'./config.env'})

//@desc  POST contact form
//@route  POST /api/v1/contact
//@access  Public

exports.createContact = asyncHandler(async(req, res, next) => {
         const output = `
         <p> You have a new contact request</p>
         <h3>Contact Details</h3>
         <ul>
            <li>Name: ${req.body.name}</li>
            <li>Name: ${req.body.subject}</li>
            <li>Name: ${req.body.email}</li>
         </ul>
         <h3><p>Name: ${req.body.text}</p></h3>
         `

         // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "mail.chigoziefrancis-portfolio.dev",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: 'contactfrancis@chigoziefrancis-portfolio.dev', // generated ethereal user
                pass: process.env.SENDMAIL_PASS, // generated ethereal password
                },
                tls:{
                    rejectUnathorized: false
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Nodemailer" <contactfrancis@chigoziefrancis-portfolio.dev>', // sender address
                to: "franksoft1@yahoo.com, francisc@hs-pforzheim.de", // list of receivers
                subject: "Nodemailer Request", // Subject line
                text: "Hello world?", // plain text body
                html: output // html body
            });

     // Send Mail With Defined Transport Object
       transport.sendMail(mailoptions, (error, info) => {
           if(error) {
               return console.log(error)
           }
           console.log("Message sent: %s", info.messageId);
  
           console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

       }) 

})