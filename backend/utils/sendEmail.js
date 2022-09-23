import nodemailer from 'nodemailer'
const sendEmail = async (subject, na, mes, sent_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: '587',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const options = {
    Name: na,
    from: sent_from,
    to: sent_to,
    replyto: reply_to,
    subject: subject,
    html: mes,
  }
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}
export default sendEmail
