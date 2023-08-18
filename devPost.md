## Full Series - Building a Full Stack Contact Form: React Frontend, Node.js Backend, Deployment

[Part 1: Getting Started & React Frontend Development](https://dev.to/elenadiaz32505/creating-a-full-stack-contact-form-using-react-and-node-eoh-temp-slug-6816062)
[Part 2: Node.js Backend Development](https://dev.to/elenadiaz32505/part-2-building-a-full-stack-contact-form-from-react-frontend-to-nodejs-backend-553e-temp-slug-1567873)
[Part 3: Deployment](https://dev.to/elenadiaz32505/part-3-building-a-full-stack-contact-form-deployment-3o4d-temp-slug-3281173)

Have you ever followed a tutorial to create a contact form, only to hit a roadblock when it comes moving beyond your local environment? If that frustration sounds familiar, you're in good company. As I worked on refining my portfolio site and adding more functionalities, I realized the vital role that backend processes play in achieving a truly flawless user experience. This insight prompted me to put together a comprehensive tutorial that leaves no stone unturned – from initial form creation to the final deployment steps.

Just picture the sense of accomplishment when you're able to build a polished and responsive contact form for your personal website or portfolio. But here's the exciting part – this tutorial isn't solely about appearances. It's about empowering you with the knowledge and tools needed to ensure your contact form not only dazzles visually but also functions flawlessly, providing users with a seamless and enjoyable interaction.

### Contents

- [Part 1: Getting Started & Frontend Development](#Getting-Started-&-Frontend-Development)
  - [What You'll Accomplish](#What-youll-accomplish)
  - [Prerequisites and Tools](#Prerequisites-and-Tools)
- [Setting Up a Domain Email with Whois.com](#Setting-Up-a-Domain-Email-with-Whois.com)
- [Setting Up the Frontend (React)](<#Setting-Up-the-Frontend-(React)>)
  - [Creating a New React Application](#Creating-a-New-React-Application)
  - [Crafting a User-Friendly Contact Form Interface with Inputs and Messages](#Crafting-a-User-Friendly-Contact-Form-Interface-with-Inputs-and-Messages)
  - [Elevating the Form's Aesthetics with CSS Styling](#Elevating-the-Form's-Aesthetics-with-CSS-Styling)
  - [Enabling Form Data Management with State](#Enabling-Form-Data-Management-with-State)
  - [Implementing Client-Side Validation for Email Input](#Implementing-Client-Side-Validation-for-Email-Input)
  - [Creating the Email Sending Function and Integrating Backend Communication](#Creating-the-Email-Sending-Function-and-Integrating-Backend-Communication)
- [GitHub Repository for Frontend Code](#GitHub-Repository-for-Frontend-Code)

<a id="Getting-Started-&-Frontend-Development"></a>

## Part 1: Getting Started & Frontend Development

Welcome to Part 1 of this 3 part comprehensive guide, where we'll embark on a journey to create a full stack contact form using the power of React and Node.js. Throughout this series, we'll delve deep into the realm of web development, crafting a polished and fully functional contact form that enhances your website's communication capabilities. By the time you reach the end of this guide, you'll possess the skills needed to elevate your website with a truly seamless communication channel.

<a id="What-youll-accomplish"></a>

### What You'll Accomplish

In this multi-part tutorial, I'll guide you through the process of building a robust full-stack contact form using React and Node.js. By following along, you'll:

- **Integrate Domain Email:** Learn how to create and integrate a personalized email address associated with your domain, elevating your website's professionalism.

- **Create a User-Friendly Frontend:** Design an intuitive and visually appealing contact form interface using React, ensuring your users have a smooth interaction.

- **Set Up a Powerful Backend:** Build a Node.js backend to process and manage incoming contact form submissions, making sure no messages slip through the cracks.

- **Achieve Seamless Deployment:** Deploy your completed full-stack contact form project online, allowing visitors to your website to access and utilize the contact form efficiently.

<a id="Prerequisites-and-Tools"></a>

### Prerequisites and Tools

Before we take the plunge into creating our full-stack contact form, let's make sure you're equipped with the right skills and tools. Here's what you'll need:

- **Solid Foundation:** It's essential to have a strong grasp of React, JavaScript, HTML, CSS, and Node.js. These form the backbone of our development journey. Additionally, a familiarity with NPM (Node Package Manager) for handling dependencies will prove advantageous.

- **Code Editor:** I highly recommend working with Visual Studio Code (VsCode). Its user-friendly interface and powerful features will make your coding experience smoother.

- **Domain Email Setup:** To achieve a professional touch, we'll utilize Whois.com for configuring email addresses within your domain. This will enable automatic replies to those who reach out through the contact form.

- **GitHub Repository:** Ensure you have a GitHub repository ready for version control and collaboration. This will be our launchpad for deploying the contact form.

- **Hosting Exploration:** We'll explore the use of CyberPanel for hosting. Its streamlined approach will simplify the deployment process, ensuring your contact form is up and running efficiently.

Now, let's roll up our sleeves and get started on this exciting journey!

<a id="#Setting-Up-a-Domain-Email-with-Whois.com"></a>

## Setting Up a Domain Email with Whois.com

If you're ready to elevate the professionalism of your website, configuring a personalized domain email can be a significant step. While this guide focuses on setting up a domain email through Whois.com, it's important to note that you can achieve similar results if you have access to the necessary SMTP (Simple Mail Transfer Protocol) data from your domain provider. Here's a step-by-step guide to help you create an email address associated with your domain:

1. **Accessing the "Manage Email" Section:** Head over to Whois.com and after logging into your account and going into your domain, navigate to the "Manage Email" section. This is where you'll be orchestrating the creation of your domain-based email address.

2. **Creating a New User:** Look for the "Add User" option – this will be your gateway to establishing an email address that's intricately tied to your domain.

3. **Form Completion:** A form will pop up, fill it out with all the necessary information required for the new email address. This will include the email prefix (the part before the "@" symbol), alternate email, and other pertinent details.

4. **User Addition and Essential Details:** After successfully adding the user, a collection of essential details will be displayed. Keep these close, as they'll be integral to the backend setup.

<pic of the whois information>

This process ensures a personalized email address linked to your domain, enhancing your professional communication capabilities.

<a id="Setting-Up-the-Frontend-(React)"></a>

## Setting Up the Frontend (React)

Now that we've laid the groundwork, it's time to tackle the frontend using the power of React.

<a id="Creating-a-New-React-Application"></a>

### Creating a New React Application

1. **Prepare the Workspace:** Begin by creating a dedicated folder for your project and open it in your preferred code editor, such as Visual Studio Code (VSCode).

2. **Initialize the React App:** Open the Terminal within your project folder and choose one of the following commands to initiate a React app template:

For a comprehensive React template:

```
npx create-react-app .
```

For a simplified minimalist React template:

```
npx nano-react-app .
```

3. **Launching the App Locally:** To run your newly created React application on your local machine, execute the following command:

If you opted for the comprehensive template:

```
npm start
```

If you went with the minimalist template, perform these two commands:

```
npm install
npm start
```

<a id="Crafting-a-User-Friendly-Contact-Form-Interface-with-Inputs-and-Messages"></a>

### Crafting a User-Friendly Contact Form Interface with Inputs and Messages

1. **Selecting App.js for Efficiency:** To expedite development, we'll employ the App.js file for constructing the contact form. If you don't already have an App.css file, create one within the same location as App.js.

![folder format using nano-react-app](image.jpg)

2. **Initial Page Structure:**

The starting configuration of your page will resemble this:

```
import React from 'react';
import './App.css';

function App() {
	return (
		<div>
		</div>
	);
}

export default App;
```

3. **Enhancing with Form Elements:**

Populate your App.jsx file with the following code to build the foundation of the contact form interface:

```
import React from 'react';
import './App.css';

function App() {
	return (
		<div className='app'>
			<h1>Contact Me</h1>
			<form
				id='contact-form'
				className='contact-form'>
				<input
					placeholder='name*'
					type='text'
					name='name'
					required={true}
				/>
				<input
					placeholder='email address*'
					type='email'
					name='email'
					required={true}
				/>
				<textarea
					maxLength={300}
					placeholder='message (max 300 characters)*'
					name='message'
					required={true}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;

```

<a id="Elevating-the-Form's-Aesthetics-with-CSS-Styling"></a>

### Elevating the Form's Aesthetics with CSS Styling

To create a simple and user-friendly form, let's enhance its visual appeal with some CSS styling.

1. **Defining Color Variables:**

Start by setting up color variables in your :root selector:

```
:root {
	--maincolor: #ffcdb2;
	--basecolor: #6d6875;
	--accentcolor1: #ffb4a2;
	--accentcolor2: #e5989b;
	--accentcolor3: #b5838d;
	--whitecolor: #ffffff;
}
```

2. **Structuring the App Container:**

Implement styling for the main container holding the form:

```
.app {
	font-family: Helvetica, sans-serif;
	background-color: var(--maincolor);
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--basecolor);
}
```

3. **Formatting the Contact Form:**

Craft styling rules for the contact form and its elements:

```
.contact-form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 50%;
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
	resize: none;
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

<a id="Enabling-Form-Data-Management-with-State"></a>

### Enabling Form Data Management with State

Let's delve into the realm of functionality. To streamline the process, we'll harness the power of state management, ensuring smoother data storage and updates in tandem with the backend.

1. **Importing useState:**
   Begin by importing the useState hook from React:

```
import React, { useState } from 'react';
```

2. **Implementing State Instances:**
   Set up instances for managing different aspects of the form's state:

```
function App() {
	//Email form
	const [emailForm, setEmailForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	//Result if message was sent or not
	const [result, setResult] = useState('');

	//Status of while message is being sent
	const [status, setStatus] = useState('Submit');

	// Rest of the JSX and form components...
}
```

2. **Binding State to Form Inputs:**
   Bind the state values to the respective input fields:

```
	<input
		placeholder='name*'
		type='text'
		name='name'
		required={true}
		value={emailForm.name}
	/>
	<input
		placeholder='email address*'
		type='email'
		name='email'
		required={true}
		value={emailForm.email}
	/>
	<textarea
		maxLength={300}
		placeholder='message (max 300 characters)*'
		name='message'
		required={true}
		value={emailForm.message}
	/>
```

4. **Updating Submit Button and Result Display:**
   Adjust the button text to display the sending status, and include an **'h3'** element to showcase the result, bound to the **'result'** state:

```
<button type='submit'>{status}</button>
<h3>{result}</h3>
```

By incorporating useState, you're effectively enhancing the management of your form's data. This dynamic approach ensures that data is stored and updated seamlessly, creating a user-friendly interaction. With these elements in place, your contact form is poised to become a dynamic communication tool.

<a id="Implementing-Client-Side-Validation-for-Email-Input"></a>

### Implementing Client-Side Validation for Email Input

Enhance your form's interactivity by incorporating client-side validation. This step will ensure smoother handling of user input and improve the overall user experience.

1. **Function to Reset the Form:**
   Let's begin by creating a function that clears the emailForm values once the submission is complete:

```
function resetEmailForm() {
		setEmailForm({ name: '', email: '', message: '' });
	}
```

2. **Function to Handle Form Changes:**
   Next, develop a function that updates the emailForm values as changes occur in the input fields. Additionally, if there's a result message displayed, it will be cleared:

```
function handleEmailFormChange(event) {
		setEmailForm((prevEmailData) => {
			return {
				...prevEmailData,
				[event.target.name]: event.target.value,
			};
		});

		if (result.length > 0) {
			setResult('');
		}
	}
```

3. **Applying Function to Input Fields:**
   Implement the **'handleEmailFormChange'** function to each input field using the **'onChange'** event:

```
<input
    placeholder='name*'
    type='text'
    name='name'
    required={true}
    value={emailForm.name}
    onChange={handleEmailFormChange}
/>
<input
    placeholder='email address*'
    type='email'
    name='email'
    required={true}
    value={emailForm.email}
    onChange={handleEmailFormChange}
/>
<textarea
    maxLength={300}
    placeholder='message (max 300 characters)*'
    name='message'
    required={true}
    value={emailForm.message}
    onChange={handleEmailFormChange}
/>
```

<a id="Creating-the-Email-Sending-Function-and-Integrating-Backend-Communication"></a>

### Creating the Email Sending Function and Integrating Backend Communication

Now it's time to bring your contact form to life by crafting the function responsible for initiating the email sending process and integrating communication with the backend. This step will enable the dynamic interaction between your frontend and backend systems.

1. **Adding the Form Submission Functionality:**
   Integrate the **'handleSubmit'** function with your form using the **'onSubmit'** event handler:

```
<Form
	id='contact-form'
	onSubmit={handleSubmit}
	method='POST'>
```

2. **Implementing the handleSubmit Function:**

The handleSubmit function orchestrates the entire email sending process. It extracts data from the form, initiates a POST request to the backend, and handles response messages accordingly:

```
const handleSubmit = async (e) => {
		setResult('');
		e.preventDefault();
		setStatus('Sending...');

		const { name, email, message } = e.target.elements;

		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};

		try {
			let response = await fetch('http://localhost:5000/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify(details),
			});
			setStatus('Submit');
			let result = await response.json();

			if (result.status === 'success') {
				setResult('Message Sent!');
				resetEmailForm();
			} else if (result.status === 'fail') {
				alert('Uh oh! Message failed to send.');
			}
		} catch (error) {
			console.error(error);
			setStatus('Submit');
			setResult('Uh oh! Issues with submitting message.');
		}
	};
```

<a id="GitHub-Repository-for-Frontend-Code"></a>

## GitHub Repository for Frontend Code

You can find the complete [frontend code on GitHub](https://github.com/diazelena325/contactform).

**Note:** When you attempt to submit the form, you might encounter an issue as the backend is not yet operational.

With the frontend development phase successfully completed, our next step is to dive into crafting the backend. Please keep in mind that as we proceed with the backend implementation, there might be certain adjustments required in the frontend code to seamlessly integrate both components.

Get ready for [Part 2: Node.js Backend Development](https://dev.to/elenadiaz32505/part-2-building-a-full-stack-contact-form-from-react-frontend-to-nodejs-backend-553e-temp-slug-1567873), where we'll explore the backend creation process and ensure the full-stack contact form is up and running flawlessly.

Happy coding! 🚀
