
import nodemailer from 'nodemailer'

export default (req,res) => {
  
 
    async function main() {
    
      
     
      
       
        let transporter = await nodemailer.createTransport({
          host: "smtp-mail.outlook.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_MAIL, 
            pass: process.env.SMTP_PASSWORD, 
          },
        });

        await new Promise((resolve, reject) => {
          // verify connection configuration
          transporter.verify(function (error, success) {
              if (error) {
                  console.log(error);
                  reject(error);
              } else {
                  console.log("Server is ready to take our messages");
                  resolve(success);
              }
          });
      });
        const mailData = {
          from: 'Mehdigital@outlook.com', // sender address
          to: 'Mehdigital@outlook.com', // list of receivers
          subject: "Portfolio PHOTO", // Subject line
          text: `Name:${Nom} Prenom:${Prenom} Email:${Email} Message:${Message} Tel:${Tel}`, // plain text body
          html: `<span>Name: ${Nom}</span><br><span>Prenom: ${Prenom}</span><br><span>Email: ${Email}</span><br><span>Message: ${Message}</span></span><br><span>Tel: ${Tel}</span>`, // html body
        }
        // send mail with defined transport object
        await new Promise((resolve,reject) => 
         transporter.sendMail(mailData,(err,info) => {
          if(err){
            console.log(err);
            reject(err)
          }
          else {
            console.log(info);
            resolve(info)
          }
         }))
      
       
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
       
      }
      
      main().catch(console.error);

    let {Nom,Prenom,Email,Tel,Message} = req.body;
   res.status(200).json({status:"OK"}) ;



  }

