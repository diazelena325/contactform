# Full Stack Contact Form: Getting Started & React Frontend

Welcome to Part 1 of my comprehensive guide where I'll walk you through creating a full-stack contact form using React and Node.js. In this segment, I'll provide a brief overview of our tutorial's objectives, and I'll explain the technologies I'll be using, including React, Node.js, NPM, and the integration of Whois.com for setting up email addresses within my domain configuration.

## Get Started

To kickstart your journey, you'll want to have a basic understanding of React, Javascript, HTML, CSS and Node.js, as well as some familiarity with NPM for managing packages. I recommend using Visual Studio Code (VsCode) as your coding tool of choice. As for deployment, ensure you have a GitHub repository ready. To host your website, I personally connect it to CyberPanel, which simplifies the hosting process. By linking GitHub and CyberPanel, deploying your project becomes a seamless experience. Let's dive in!

### Getting an email from domain

My domain is registered on Whois.com where I will be obtaining an email associated with the domain. Here's a simple guide on creating an email using your domain within the Whois platform:

1. Navigate to Whois.com and access the "Manage Email" section.

2. Opt for the "Add User" option, which will establish an email address using your domain.

3. Complete the provided form with the necessary information for the new email address.

4. Following the user addition, essential details will be displayed. These details will be used for the backend.

This process ensures a personalized email address linked to your domain, enhancing your professional communication capabilities.

## Setting Up the Frontend (React)

### Create a new React application

1. Create folder and open on VScode. Open Terminal and run **one** of these two commands to create a template react app:

```
// full react template
npx create-react-app .

// simplified minimalist react template
npx nano-react-app .
```

To run the application on local, use the following command:

```
// if you used create-react-app
npm start

// if you used nano-react-app, do both of these
npm install
npm start
```

### Design a user-friendly interface for email input and message

1. For fast development, I will be using App.js to create the form. Check if you have an App.css file, if not then create one in the same location as App.js

<pic of folder format using nano-react-app>

The HTML in App.js will be:

```
import React from 'react';
import './App.css';

export default () => (
	<div className='app'>
		<h1>Contact Me</h1>
		<form
			id='contact-form'
			className='contact-form'>
			<input
				placeholder='name*'
				type='text'
				name='name'
				required='true'
			/>
			<input
				placeholder='email address*'
				type='email'
				name='email'
				required='true'
			/>

			<textarea
				maxLength={300}
				placeholder='message (max 300 characters)*'
				name='message'
				required='true'
			/>
			<button type='submit'>Submit</button>
		</form>
	</div>
);

```

CSS styling in App.css will be:

```
:root {
	--maincolor: #ffcdb2;
	--basecolor: #6d6875;
	--accentcolor1: #ffb4a2;
	--accentcolor2: #e5989b;
	--accentcolor3: #b5838d;
	--whitecolor: #ffffff;
}

.app {
	font-family: Helvetica, sans-serif;
	background-color: var(--maincolor);
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

h1 {
	color: var(--basecolor);
}

.contact-form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 50vw;
}

.contact-form > input {
	height: 2.5rem;
	border: none;
	border-radius: 2px;
	background-color: var(--accentcolor1);
	font-size: 1.4rem;
	color: var(--basecolor);
	padding: 0.5rem;
}

.contact-form > textarea {
	height: 7rem;
	border: none;
	border-radius: 2px;
	background-color: var(--accentcolor2);
	font-size: 1.4rem;
	color: var(--basecolor);
	padding: 0.5rem;
}

input::placeholder,
textarea::placeholder {
	color: var(--basecolor);
}

.contact-form > button {
	height: 3rem;
	border: none;
	border-radius: 2px;
	background-color: var(--accentcolor3);
	font-size: 1.4rem;
	color: var(--whitecolor);
	padding: 0.5rem;
	cursor: pointer;
	transition: 0.4s ease-in-out;
}

.contact-form > button:hover {
	transition: 0.4s ease-in-out;
	background-color: var(--basecolor);
}

```

### Implement state management for form data

We will implement state management to make it easier in storing values and have them updated for the backend.

### Integrate client-side validation for email input

### Create a button to trigger the email sending process
