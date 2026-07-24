const nodemailer = require("nodemailer")

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    }
  }

  try {
    const { name, email, message } = JSON.parse(event.body)

    // Configura el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Usa variables de entorno
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_FROM || email,
      to: process.env.EMAIL_TO, // Email de destino
      subject: `Contact Form Message from ${name}`,
      text: `You have a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    }

    await transporter.sendMail(mailOptions)

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error while sending email" })
    }
  }
}
