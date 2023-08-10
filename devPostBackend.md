# Full Stack Contact Form: Getting Started & React Frontend

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
	        "start": "node server.js"
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

On the config.json will be the credentials. You will put the credentials from the email created on whois.com

<pic of the whois information>
```
	module.exports = {
	    USER: 'NewEmail@domain.com',
	    PASS: 'password',
	    EMAIL: 'NewEmail@domain.com',
    };
```

### server.js file

We will first add the following required packages and initial setup.

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

To test backend, run npm run start

succesful start of backend shows up like this:
<image of the backend on terminal>
You can also run on the browser to see it run it
<image if browser with localhost:5000 that says hi>

To turn off the backend, do ctrl + c on the terminal

## Create Nodemailer functions

We will create the required functions for nodemailer. To get the full documentation of nodemailer go here. Replace the fields with the details from whois email information.

```
var transport = {
host: 'smtp.mailhost.com', // Replace with the SMTP host of your provider
port: 587,
auth: {
user: creds.USER,
pass: creds.PASS,
},
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

Create the post route that will send the message to your email and will also send an auto reply to the person sending you a message.

```
router.post('/send', (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var senderEmail = name + ' <' + creds.EMAIL + '>';
	var content = `name: ${name} \n email: ${email} \n message: ${message} `;

	var mail = {
		from: senderEmail,
		to: creds.EMAIL, // email address you will receive messages
		subject: 'New Message from your Portfolio',
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
					//your email address
					from: creds.EMAIL,
					to: email,
					subject: 'Message received',
					text: `Hi ${name},\nThank you for sending me a message. I will get back to you soon.\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
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

The backend is located on this github location:

## Try on LocalHost

Ok, we are ready to test locally.

1. start the backend with npm run start
2. start the frontend with npm run start
3. Write the message and press sent, it should send succesfully.

<images of the frontend>

So you will get an email from Tester Name:
<image from tester name>

and they will get an auto reply:
<image of the auto reply>

## Getting Deployment ready

## Configure Nodemailer to use Whois.com's email service
