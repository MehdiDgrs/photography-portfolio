
import nodemailer from 'nodemailer'

export default (req,res) => {
  
 
    async function main() {
    
      
     
      
       
        let transporter = await nodemailer.createTransport({
          host: "smtp.office365.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_MAIL, 
            pass: process.env.SMTP_PASSWORD, 
          },
        });

      
        // send mail with defined transport object
        await new Promise((resolve,reject) => 
         transporter.sendMail({
          from: 'Mehdigital@outlook.com', // sender address
          to: 'Mehdigital@outlook.com', // list of receivers
          subject: "Portfolio PHOTO", // Subject line
          text: `Name:${Nom} Prenom:${Prenom} Email:${Email} Message:${Message} Tel:${Tel}`, // plain text body
          html: `<span>Name: ${Nom}</span><br><span>Prenom: ${Prenom}</span><br><span>Email: ${Email}</span><br><span>Message: ${Message}</span></span><br><span>Tel: ${Tel}</span>`, // html body
        },(err,info) => {
          if(err){
            console.log(err);
            reject(err)
          }
          else {
            console.log(info)
            res.send("success") ;
            resolve(info)
          }
         }))
      
       
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
       
      }
      
      main().catch(console.error);

    let {Nom,Prenom,Email,Tel,Message} = req.body;
  



  }

