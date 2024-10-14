import nodemailer from "nodemailer";

const createMessage = (data) => {
  return `
    <p>Hello,</p>
    <p>You have received a new message from your contact form.</p>
    <p><strong>Name:</strong> ${data.name}<br>
    <strong>Email:</strong> ${data.from}<br>
    <strong>Subject:</strong> ${data.subject}<br>
    <strong>Message:</strong> ${data.message}</p>
    <p>Best regards,<br>Your Website Team</p>
  `.trim();
};

export async function POST(request) {
  const { name, from, subject, message } = await request.json();

  if (!name || !from || !subject || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    to: process.env.EMAIL_USER,
    from: from,
    subject: "Portofolio Contact",
    html: createMessage({ name, from, subject, message }),
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Error sending email: Please try again later.", {
      status: 500,
    });
  }
}
