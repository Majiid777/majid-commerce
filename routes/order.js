var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maatougui.majid007@gmail.com',
    pass: 'Majda2493'
  } 
});

var mailOptions = {
  from: 'maatougui.majid007@gmail.com',
  to: 'majid.maatougui777@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
const email=()=>{
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
};

module.exports=email