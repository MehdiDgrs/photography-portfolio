var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient("54437e2f-bb77-4cce-92bc-9f896b73679e");
export default async (req, res) => {
  let { Nom, Prenom, Email, Tel, Message } = req.body;

  try {
    client.sendEmail({
      From: "photographe@mehdidegryse-photographe-lille.com",
      To: "photographe@mehdidegryse-photographe-lille.com",
      Subject: "Hello from Postmark",
      HtmlBody: `<span>Name: ${Nom}</span><br><span>Prenom: ${Prenom}</span><br><span>Email: ${Email}</span><br><span>Message: ${Message}</span></span><br><span>Tel: ${Tel}</span>`,
      TextBody: `Name:${Nom} Prenom:${Prenom} Email:${Email} Message:${Message} Tel:${Tel}`,
      MessageStream: "outbound",
    });

    console.log("Email sent successfully");
    res.status(200).json("");
  } catch (error) {
    console.error(error);
    res.status(500).json("Error sending message");
  }
};
