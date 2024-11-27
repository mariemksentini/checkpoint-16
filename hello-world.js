// //task 1
console.log('hello world')

// //task2
const server = require('http')
server.createServer((req,res)=>{
    res.write('<h1>Hello Node!!!!</h1>')
    res.end()
}).listen(3000, console.log("Server is running"))

// //task 3
console.log(fs.readFileSync('./welcome.txt','utf-8'))

//task 4
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);

//task 5
const emailSender=require('nodemailer-email-sender');

emailSender({
    mailService:'gmail', //gmail,sendgrid etc..
    senderUser:'fff', // for email-id abc@gmail.com, username will be abc
    senderEmail:'fff@gmail.com', // sender's email-id
    senderPassword:'12345', // sender's email password
    receiverEmail:'eeee@gmail.com', // receiver's email address
    subject:'subject', // email subject
    html:'<h1>Body of email</h1>' // email body
    });
console.log("done"); 