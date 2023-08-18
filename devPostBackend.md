# Building a Full Stack Contact Form: From React Frontend to Node.js Backend

Welcome to Part 2 of our Full Stack Contact Form Series! In this chapter, we're about to unlock the world of backend development to enable the actual sending of emails. Get ready to harness the power of Node.js, Express, Nodemailer, CORS, and HTTPS to create a seamless communication experience. By the end of this chapter, you'll have a firm grasp on how these technologies work together to bring your contact form to life.

### Entire Series

[Part 1: Getting Started & Frontend Development](https://www.example.com)
[Part 2: Backend Development](https://www.example.com)
[Part 3: Deployment](https://www.example.com)

### Contents

- [Part 2: Backend Development](#Backend-Development)
  - [Creating Your Node.js Project with npm](#Creating-Your-Node.js-Project-with-npm)
  - [Installing Essential Dependencies (Express, Nodemailer)](#Installing-Essential-Dependencies)
  - [Storing Sensitive Data Securely with config.js](#Storing-Sensitive-Data-Securely-with-config.js)
  - [Setting Up Your server.js Backend File](#Setting-Up-Your-server.js-Backend-File)
    - [Creating Nodemailer Functions for Email Sending](#Creating-Nodemailer-Functions-for-Email-Sending)
    - [Crafting API Routes for Email Handling](#Crafting-API-Routes-for-Email-Handling)
  - [Testing Your Full-Stack Contact Form Locally](#Testing-Your-Full-Stack-Contact-Form-Locally)
- [GitHub Repository for Backend Code](#GitHub-Repository-for-Backend-Code)

<a id="Backend-Development"></a>

## Part 2: Backend Development

Our journey into the backend realm begins with Node.js (I'm using version 18.13.0) and the npm package manager. These tools will be your trusty companions as we embark on building the backbone of our email-sending mechanism. So, let's roll up our sleeves and get started on creating a backend that ensures your contact form is not just eye-catching, but fully functional too.

<a id="Creating-Your-Node.js-Project-with-npm"></a>

### Creating Your Node.js Project with npm

Let's kick off our backend development by setting up a Node.js project using npm. This will provide the foundation for building the functionalities that power your email-sending mechanism.

1. **Create a Dedicated Backend Folder:** Begin by creating a folder specifically for your backend code. Open this folder in your preferred code editor, like VSCode.

2. **Initialize the Project:** In the terminal within your backend folder, enter the following command to generate a basic package.json template file:

```
npm create -y
```

This will initialize your Node.js project and set up the essential package.json file.

3. **Structure Your Files:**
   Create two important files within your backend folder:

- **server.js:** This is where you'll write the core functionality code for your backend.
- **config.js:** Use this file to securely store sensitive information like passwords.

Here's how your project folder might be structured:

```
/backend
    ├── package.json
    ├── server.js
    ├── config.js

```

With these foundational steps complete, you've set the stage for your backend development journey. The **package.json** file will hold key information about your project, and the **server.js** file will become the heart of your email-sending mechanism. The **config.js** file will help ensure that sensitive data remains protected. In the next section, we'll dive into creating the server and setting up the functionalities that bring your contact form to life.

<a id="Installing-Essential-Dependencies"></a>

### Installing Essential Dependencies (Express, Nodemailer)

Now, let's equip your backend with the necessary tools to bring your email-sending mechanism to life. We'll install the required dependencies that make the magic happen.

Technologies utilized in this project are:

- **Node.js**: A runtime environment enabling the execution of JavaScript code on the server-side.
- **Express**: A streamlined and versatile web application framework built for Node.js, optimized for routing and middleware management.
- **Nodemailer**: A specialized Node.js module designed to simplify the process of sending emails within applications.
- **CORS**: An Express middleware that facilitates Cross-Origin Resource Sharing, allowing seamless handling of HTTP requests across varying origins.
- **HTTPS**: The HyperText Transfer Protocol Secure (HTTPS) guarantees secure data exchange over the internet by encrypting information exchanged between the server and the client. ==HTTPS will be used and discussed in part 3 of the series before deployment.==

1. **Installing Dependencies:** In your terminal, navigate to your backend folder and install the required dependencies using the following commands:

```
   npm install express nodemailer cors --save
```

This will add **express**, **nodemailer**, and **cors** to your project, enabling you to create a functional server and send emails.

2. **Updating Your package.json:** Open your **package.json** file and update it with the following start script to **mailstart**:

```
"scripts": {
	        "test": "echo \"Error: no test specified\" && exit 1",
	        "mailstart": "node server.js"
	    },
```

and change the **main** field with **server.js**.

```
"main": "server.js",
```

The full **package.json** will look like this:

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

This updated package.json includes scripts to start your server and lists the dependencies your backend relies on. With these dependencies installed and your package.json updated, your backend is armed with the tools it needs to function effectively.

<a id="Storing-Sensitive-Data-Securely-with-config.js"></a>

### Storing Sensitive Data Securely with config.js

The config.js file plays a crucial role in maintaining the security of your backend. It's where you'll securely store sensitive information, such as credentials for sending emails and predefined messages. This practice ensures that your private data remains protected.

1. **Populate with Credentials:** In config.js, insert the following code:

```
// change the following details with your information
	module.exports = {
	    USER: 'NewEmail@domain.com',
	    PASS: 'password',
	    EMAIL: 'NewEmail@domain.com',
		HOST: 'smtp.mailhost.com',
		MAILPORT: 555,
		YOURNAME: 'Your Name',
		YOURSITE: 'www.yoursite.com',
    };
```

- **USER:** Username of email account (usually email address)
- **PASS:** Password of email account
- **EMAIL:** Email address
- **HOST:** SMTP host
- **MAILPORT:** STMP port, usually 587
- **YOURNAME:** Your full name for the sender and auto reply message
- **YOURSITE:** Your portfolio website

Replace the placeholders with the actual credentials and information that correspond to the email account created on Whois.com. These details are essential for successfully sending emails using Nodemailer.

And that's it! Your config.js file is now set up to securely hold your credentials and email-related information.

<a id="Setting-Up-Your-server.js-Backend-File"></a>

### Setting Up Your server.js Backend File

Your server.js file is the heart of your backend. It's where the magic happens – where you'll configure routes, send emails, and make sure everything runs smoothly. Let's dive in and set up the initial structure.

1. **Importing Required Packages and Initial Setup:**
   Start by importing the necessary packages and setting up the initial configuration:

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
```

2.**Creating a Test Route:**
Let's create a basic test route to ensure your backend is up and running:

```
app.get('/', (req, res) => {
    res.json('hi');
});
```

3. **Listening to the Port:**
   Finally, set your backend to listen on a specific port (in this case, port 5000):

```
app.listen(serverPort, () => console.log(`backend is running on port ${serverPort}`));
```

4. **Testing the Backend:**
   To test your backend, run the following command in your terminal:

```
npm run mailstart
```

A successful start of your backend will be indicated in the terminal. You can also open your browser and navigate to **http://localhost:5000** to see the "hi" message.

To turn off the backend, simply press **Ctrl + C** in the terminal where the backend is running.

With your **server.js** file set up, your backend is ready to go! It's now listening on port 5000 and responding to requests.

<a id="Creating-Nodemailer-Functions-for-Email-Sending"></a>

#### Creating Nodemailer Functions for Email Sending

Let's bring the power of Nodemailer into your backend to enable the actual sending of emails. We'll start by configuring Nodemailer using the details from your Whois email information.

1. **Setting Up Transport Configuration:**
   Create the **transport** object, which holds the configuration for sending emails. Replace the fields with the details from your Whois email information. This includes the SMTP host, port, user, password, and the email address from which the emails will be sent:

```
var transport = {
	host: creds.HOST,
	port: creds.MAILPORT,
	auth: {
		user: creds.USER,
		pass: creds.PASS,
	},
	from: creds.EMAIL,
};
```

2. **Creating the Nodemailer Transporter:**
   Next, utilize the **transport** configuration to create a Nodemailer transporter. This transporter is responsible for sending emails. We'll also use the **verify** method to ensure that the server is ready to accept messages:

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

Starting your backend now will display the success message indicating that the server is ready to send messages. In case of any issues, the terminal will show an error message, usually due to incorrect SMTP settings.

<insert image of backend and server ready to send message>

<a id="Crafting-API-Routes-for-Email-Handling"></a>

#### Crafting API Routes for Email Handling

Now, we're about to tie everything together by creating API routes that handle email sending requests. These routes will enable your backend to receive data from your frontend, send the message to your email, and even respond with an automated acknowledgment. Exciting, isn't it?

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
		to: creds.EMAIL,
		subject: `New Portfolio Message from ${name}`,
		text: content,
	};

//Deliver message from your portfolio to your email address
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

			//If Success, send Auto Reply email
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

In this code, the **/send** route is created to handle POST requests from your frontend. It extracts the **name**, **email**, and **message** from the request body and constructs an email to send to your specified email address. It also sends an auto-reply to the sender using the provided data.

With this code, your backend is now fully equipped to handle email sending requests. The message data will be extracted from the request and sent to your designated email address, while an automatic acknowledgment will be sent back to the sender. Your backend is primed and ready to test.

<a id="Testing-Your-Full-Stack-Contact-Form-Locally"></a>

### Testing Your Full-Stack Contact Form Locally

Great job! You're now at the exciting stage of testing your full-stack contact form locally. Follow these steps to see your creation in action:

1. **Start the Backend:** In your terminal, navigate to the backend folder and run the following command to start the backend:

```
npm run mailstart
```

This command will fire up your backend server.

2. **Start the Frontend:** Open a new terminal window, navigate to the frontend folder, and run:

```
npm run start
```

This will start your frontend development server.

3. **Test the Form:** With both the backend and frontend servers up and running, open your browser and navigate to **[http://localhost:3000](http://localhost:3000)** (or the appropriate port if your frontend is running on a different one). Fill out the contact form with some test data and hit the submit button. You should see a successful message on the frontend, indicating that the message was sent. Also, try testing with missing data or not using a correct email format.

4. **Check Emails:** Now, check your email inbox. You should receive an email from the tester's name containing the message details. The sender will also receive an auto-reply acknowledging the message.

<img Received Email>
<img Auto Reply Email>

With these steps, you've successfully tested your full-stack contact form locally! The messages are being sent from your frontend, processed by your backend, and received in your email inbox. It's a satisfying moment when everything comes together seamlessly.

<a id="GitHub-Repository-for-Backend-Code"></a>

## GitHub Repository for Backend Code

You can find the complete backend code on GitHub [here](https://www.example.com).

In the upcoming and final part of this series, we'll delve into the exciting realm of deploying your full-stack contact form, making it accessible online. This step is pivotal as it enables you to amplify your communication capabilities with visitors to your website. Stay tuned for a wealth of valuable insights and practical guidance that will take your project to its grand finale.

As a quick recap, if you haven't already, make sure to catch [Part 1]() of this series where we ventured into creating the frontend contact form, skillfully integrating the POST request that seamlessly connects to the backend. Your journey is nearly complete, and the culmination promises to be both enlightening and rewarding.
