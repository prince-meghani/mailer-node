const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD, TO } = require("./config"); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

const sendMail = async () => {
  const mailOptions = {
    from: `"Prince 👑" <${EMAIL}>`,
    to: TO, // This must be defined
    subject: "🔥 Hello from Prince!",
    text: "Hey! This is a plain text message from Prince.",
    html: `
      <h1>Hello from Prince 👑</h1>
      <p>I’m excited to connect with you!</p>
      <h3>Technologies I love:</h3>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
      <p>Let’s build something awesome together!</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

module.exports = { sendMail };
