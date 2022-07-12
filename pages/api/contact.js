

const sgMail = require('@sendgrid/mail');


export default (req,res) => {
  let {Nom,Prenom,Email,Tel,Message} = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  let msg = {
    from: 'meddeg59@gmail.com', // sender address
    to: 'meddeg59@gmail.com', // list of receivers
    subject: "Portfolio PHOTO", // Subject line
    text: `Name:${Nom} Prenom:${Prenom} Email:${Email} Message:${Message} Tel:${Tel}`, // plain text body
    html: `<span>Name: ${Nom}</span><br><span>Prenom: ${Prenom}</span><br><span>Email: ${Email}</span><br><span>Message: ${Message}</span></span><br><span>Tel: ${Tel}</span>`, // html body

}
 

  
let main = async () => {
       
let sendMail = await  sgMail.send(msg);
        console.log(sendMail)
      
      
}
main().then(() => {res.status(200).json('')}, error => {
  console.error(error);

 



  })

}