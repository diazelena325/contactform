# Full Stack Contact Form Series: Backend

## Setting Up the Backend (Node.js)

We will be working on backend for sending mail using node, express, nodemailer, cors, and https.
I'm using an email from my domain that is registered on Whois.com.

## Get Started

We will be using Nodejs (my current version is 18.13.0) and npm package manager.

## Initialize a Node.js project using npm

1. Create a folder for the backend and open on vscode.

2. In terminal of folder write the following that will create package.json template file:

```
npm create -y
```

3. Create file server.js and config.js. Server.js will be where the functionality code will be. Config.js will be for saving passwords.
   <insert image of the file breakdown>

## Install necessary dependencies (Express, Nodemailer)

In terminal, install the following dependencies:

```
   npm install express --save
   npm install nodemailer --save
   npm install --save cors
```

In the package.json, add the following start script, the full package.json text

```
	{
	    "name": "emailbackend",
	    "version": "1.0.0",
	    "description": "",
	    "main": "server.js",
	    "scripts": {
	        "test": "echo \"Error: no test specified\" && exit 1",
	        "mailstart": "node server.js"
	    },
	    "keywords": [],
	    "author": "",
	    "license": "ISC",
	    "dependencies": {
	        "cors": "^2.8.5",
	        "express": "^4.18.2",
	        "nodemailer": "^6.9.4"
	    }
}
```

### config.js file

On the config.json will be the credentials. You will put the credentials from the email created on whois.com and the messages that are sent.

<pic of the whois information>
```
// change the following details to your information
	module.exports = {
	    USER: 'NewEmail@domain.com',
	    PASS: 'password',
	    EMAIL: 'NewEmail@domain.com',
		HOST: 'smtp.mailhost.com',
		MAILPORT: 587,
		YOURNAME: 'Your Name',
		YOURSITE: 'www.yoursite.com',
    };
```

### server.js file

We will first add the following required packages and initial setup.

Express will be used for the router
Nodemailer will be what sends the message.
Cors will be used for
fs is a file reader for when converting this backend from http to https

```
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const fs = require('fs');
const creds = require('./config');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
	res.json('hi');
});

app.listen(5000, () => console.log(`backend is running on port 5000`));
```

To test backend, run npm run mailstart

succesful start of backend shows up like this:
<image of the backend on terminal>
You can also run on the browser to see it run it
<image if browser with localhost:5000 that says hi>

To turn off the backend, do ctrl + c on the terminal

## Create Nodemailer functions

We will create the required functions for nodemailer. To get the full documentation of nodemailer go here. Replace the fields with the details from whois email information. We will use Nodemailer to create a transporter. Configure transporter with Whois.com's SMTP settings

```
var transport = {
	host: creds.HOST, // The SMTP host of your provider
	port: creds.MAILPORT,
	auth: {
		user: creds.USER,
		pass: creds.PASS,
	},
	from: creds.EMAIL,
};
```

This transport will be used in this next function, the nodemailer createTransport, that checks that the server is ready.

```
var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});
```

When starting the backend now, you will see the this success message or else it will show an error message on the terminal.
<insert image of backend and server ready to send message>

## Create API routes for handling email requests

Create a route to handle email sending requests. Create the post route that will send the message to your email and will also send an auto reply to the person sending you a message. Use the transporter to send emails with user-provided data. Handle success and error responses in the backend

```
router.post('/send', (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var senderEmail = `${name} <${creds.EMAIL}>`;
	var yourEmail = `${creds.YOURNAME} <${creds.EMAIL}>`;
	var content = `name: ${name} \n email: ${email} \n message: ${message} `;
	var mail = {
		from: senderEmail,
		to: creds.EMAIL, // This is email address that you want to receive messages on
		subject: `New Portfolio Message from ${name}`,
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		console.log(err);
		console.log(data);
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});

			//Send Auto Reply email
			transporter.sendMail(
				{
					from: yourEmail,
					to: email,
					subject: 'Message received',
					text: `Hi ${name},\nThank you for sending me a message. I will get back to you soon.\n\nBest Regards,\n${creds.YOURNAME}\n${creds.YOURSITE}\n\n\nMessage Details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
					html: `<p>Hi ${name},<br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${creds.YOURNAME}<br>${creds.YOURSITE}<br><br><br>Message Details<br>Name: ${name}<br> Email: ${email}<br> Message: ${message}</p>`,
				},
				function (error, info) {
					if (error) {
						console.log(error);
					} else {
						console.log('Message sent: ' + info.response);
					}
				}
			);
		}
	});
});
```

## Github Code:

The backend is located on this github location:

## Try on LocalHost

Ok, we are ready to test locally.

1. start the backend with npm run mailstart
2. start the frontend with npm run start
3. Write the message and press submit, it should send succesfully.

<images of the frontend>

So you will get an email from Tester Name:
<image from tester name>

and they will get an auto reply:
<image of the auto reply>

Next part of the series will discuss how to deploy and issues I came across with.
Previous part was about creating the front end form that included the fetch request when submitting.
