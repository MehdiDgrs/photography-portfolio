
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  
 
  
    
      
     
    

        

       
        
        // send mail with defined transport object
        async function sendEmail(req, res) {
          let {Nom,Prenom,Email,Tel,Message} = req.body;
          console.log(sendgrid.setApiKey('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'))
          try {
            // console.log("REQ.BODY", req.body);
            await sendgrid.send({
              from: 'Mehdigital@outlook.com', // sender address
              to: 'Mehdigital@outlook.com', // list of receivers
              subject: "Portfolio PHOTO", // Subject line
              text: `Name:${Nom} Prenom:${Prenom} Email:${Email} Message:${Message} Tel:${Tel}`, // plain text body
              html: `<span>Name: ${Nom}</span><br><span>Prenom: ${Prenom}</span><br><span>Email: ${Email}</span><br><span>Message: ${Message}</span></span><br><span>Tel: ${Tel}</span>`, // html body
            });
          } catch (error) {
            // console.log(error);
            return res.status(error.statusCode || 500).json({ error: error.message });
          }
       
          return res.status(200).json({ error: "" });
        }
       
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
       
      
      
     
  
   export default sendEmail
  



  

