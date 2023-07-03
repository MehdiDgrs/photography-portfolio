const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  let { Nom, Prenom, Email, Tel, Message } = req.body;

  let msg = {
    from: "obelisque59@gmail.com", // sender address
    to: "obelisque59@gmail.com", // list of receivers
    subject: "Portfolio PHOTO", // Subject line
    text: `Name:${Nom} Prenom:${Prenom} Email:${Email} Message:${Message} Tel:${Tel}`, // plain text body
    html: `<span>Name: ${Nom}</span><br><span>Prenom: ${Prenom}</span><br><span>Email: ${Email}</span><br><span>Message: ${Message}</span></span><br><span>Tel: ${Tel}</span>`, // html body
  };

  try {
    let sendedMsg = await sgMail.send(msg);
    console.log(sendedMsg);
    console.log("Email sent successfully");
    res.status(200).json("");
  } catch (error) {
    console.error(error);
    res.status(500).json("Error sending message");
  }
};
