# Full Series - Building a Full Stack Contact Form: From React Frontend, Node.js Backend, to Deployment

[Part 1: Getting Started & Frontend Development](https://www.example.com)
[Part 2: Backend Development](https://www.example.com)
[Part 3: Deployment](https://www.example.com)

Welcome to Part 3 of our comprehensive full-stack contact form series! In this installment, we'll delve deeper into the deployment aspect, taking the impressive groundwork you've laid so far and transforming it into a fully functional and accessible communication tool.

### Contents

- [Part 3: Preparing for Deployment](#Part-3:-Preparing-for-Deployment)
  - [Backend Enhancement: Transitioning to HTTPS](#Backend-Enhancement:-Transitioning-to-HTTPS)
  - [Frontend Refinement: Transitioning to HTTPS and Production Build](#Frontend-Refinement:-Transitioning-to-HTTPS)
- [Deployment: GitHub and CyberPanel](#Deployment:-GitHub-and-CyberPanel)
  - [Backend Deployment](#Backend-Deployment)
    - [Keeping the Backend Server Running: PM2](#Keeping-the-Backend-Server-Running)
  - [Frontend Deployment](#Frontend-Deployment)
- [Troubleshooting](#Troubleshooting)
- [Conclusion](#Conclusion)

<a id="Part-3:-Preparing-for-Deployment"></a>

## Part 3: Preparing for Deployment

In this phase, we'll be focusing on the crucial steps to get your contact form ready for deployment. This will involve making the necessary adjustments, including the conversion of your backend from HTTP to HTTPS to ensure seamless POST requests.

<a id="Backend-Enhancement:-Transitioning-to-HTTPS"></a>

### Backend Enhancement: Transitioning to HTTPS

In order to ensure secure communication between your frontend and backend, it's important to convert your backend from using HTTP to HTTPS. This transition guarantees the integrity of the data being transferred and boosts the overall security of your full-stack contact form.

**Resource and Reference:** A valuable resource that provides detailed insights into configuring SSL certificates for Node.js HTTPS can be found at [https://adamtheautomator.com/https-nodejs/](https://adamtheautomator.com/https-nodejs/)

1. **Install HTTPS Package:** Start by installing the https package using the following command in your terminal:

```
npm i https
```

2. **Import HTTPS Module:** At the top of your server.js file, import the https module as follows:

```
const https = require('https');
```

3. **Update Server Creation:** Modify the server creation process. Instead of using **app.listen**, you'll now create an HTTPS server instance using the **https.createServer** method. This involves specifying the paths to your SSL certificate and private key files.

```
const httpsServer = https.createServer(
	{
		key: fs.readFileSync(
			'path-to-privkey.pem'
		),
		cert: fs.readFileSync(
			'path-to-cert.pem'
		),
	},
	app
);

httpsServer.listen(serverPort, () =>
	console.log(`backend is running on port ${serverPort}`)
);
```

Don't forget to comment out or remove the old **app.listen** line.

With these updates, your backend is now transitioned to use HTTPS, enhancing the security and reliability of your contact form's communication.

In the next step, we'll make a small change in the frontend to ensure that the fetch URL points to the HTTPS backend, completing the circle of secure communication between your frontend and backend.

<a id="Frontend-Refinement:-Transitioning-to-HTTPS"></a>

### Frontend Refinement: Transitioning to HTTPS and Production Build

With the backend now utilizing HTTPS for secure communication, it's essential to ensure that the frontend also points to the updated secure API endpoint. Let's make this crucial update:

1. **Update API Endpoint URLs:** Open your frontend codebase and find the sections where you make API calls to the backend. If you've transitioned your backend to use HTTPS, simply add the letter "s" to the URL to switch from HTTP to HTTPS.

```
let response = await fetch('https://localhost:5000/send', {
```

Build the React application for production. I made a production specific folder outside from the dev folder. On package.json, add the build script. This script builds the react application, saves the build to the prod folder and removes it from the dev folder.

2. **Build for Production:** To get your React application ready to be deployed, it needs to undergo a special process called "building for production." This process is like packaging your app in a way that makes it efficient and suitable for sharing over the internet. To make things organized, I've created a separate folder specifically for the production version of your app. This keeps things neat, organized, and makes it super easy when it comes to uploading the production version to GitHub. It keeps your development workspace clean and ensures that only the polished and optimized version is shared. This way, you're all set for a smooth deployment process!

Here's how to do it:

- **Creating a Production Folder:** I've set up a special folder outside of your development workspace. This is where the final version of your app that's ready for deployment will be placed.

- **Build Script in package.json:** I've added a special script to your **package.json** file. This script automates the process. First, it builds your React app in the development folder. Then, it moves the built files to the production folder. Finally, it tidies up the development folder by removing the unnecessary build files.

If you're using **create-react-app**, the build script will be:

```
"build": "react-scripts build && XCOPY C:\\Dev\\contactform\\build\\\* C:\\Prod\\contactform_prod /s /y && RMDIR /s /q C:\\Dev\\contactform\\build",
```

If you're using **nano-react-app**, the build script will be:

```
"build": "vite build && XCOPY C:\\Dev\\contactform\\build\\\* C:\\Prod\\contactform_prod /s /y && RMDIR /s /q C:\\Dev\\contactform\\build",
```

3. **Run the Build Script:** Save the updated package.json file and in your terminal, run the following command to initiate the production build:

```
npm run build
```

4. **Publish to GitHub:** Navigate to the production build folder using VSCode or your preferred file explorer. Once you're in the production folder, you can publish the contents of this folder to your GitHub repository. This will make your production-ready frontend code accessible online.

<a id="Deployment:-GitHub-and-CyberPanel"></a>

## Deployment: GitHub and CyberPanel

<a id="Backend-Deployment"></a>

### Backend Deployment

When it comes to deploying your backend to the server, the process is smooth and straightforward. Here's how you do it:

1. **Remote Connection:** Connect remotely to your CyberPanel server, where your portfolio website is stored. Navigate to the location where you want to place your backend. Create a folder named **emailsvc** outside the **public_html** folder. Inside this folder, add the necessary backend files, which include:

- **config.js**
- **package-lock.json**
- **package.json**
- **server.js**
  Remember, there's no need to import the **node_modules** folder; it's already in your **package.json**.

2. **Install Packages:** In the terminal, navigate to the location of your backend files on the server. Install the required packages. You can do this by running either of the following commands:

```
// you can do either one of these
npm install
```

or

```
npm install express nodemailer cors https --save
```

This step ensures that your backend has all the necessary dependencies to run smoothly.

3. **Test Backend:** To ensure that your backend is working correctly on the server, run the command:

```
npm run start
```

This test run is crucial to confirm that everything is set up and ready for action.

With your backend deployed and successfully tested, you've achieved a significant milestone in bringing your full-stack contact form to life in a live environment. However, it's important to note that if you disconnect from the remote connection to CyberPanel, the backend might not stay active. To ensure continuous operation, follow the upcoming steps that will help you keep your backend running reliably even when you're not directly connected.

<a id="Keeping-the-Backend-Server-Running"></a>

#### Keeping the Backend Server Running: PM2

It's important to note that the backend server you've deployed may only remain active while you're connected remotely to the CyberPanel server. To ensure the continuous operation of your backend, even when you're not connected, we'll use a tool called PM2. PM2 allows you to manage various backend services and keep them running efficiently. To get more information about pm2 go here: [https://pm2.keymetrics.io/docs/usage/process-management/](https://pm2.keymetrics.io/docs/usage/process-management/)

Here's how you set it up:

1. **Install PM2:** In your terminal, run the following command to install PM2 globally:

```
npm install pm2 -g
```

This command will make PM2 available for managing your backend services.

2. **Unique Start Scripts:** Ensure that each of your backend services has a distinct start script name. For example, in our case, we named our script **mailstart**.

3. **Start the Service:** To initiate a backend service using PM2, execute the following command:

```
pm2 start "npm run mailstart"
```

This command tells PM2 to manage the execution of your backend service.

4. **Stop the Service:** If you need to halt the service, you have two options:

- To stop all backend services simultaneously, run:

```
pm2 stop all
```

- To stop a specific service, provide its unique identifier (ID):

```
pm2 stop <id>
```

By using PM2, you can ensure that your backend services stay active and responsive even when you're not directly connected to the CyberPanel server. This is a crucial step in making sure your full-stack contact form remains operational and accessible at all times.

<a id="Frontend-Deployment"></a>

### Frontend Deployment

Deploying the frontend of your application using CyberPanel's Git management feature is the final step towards making your full-stack contact form accessible to users.

1. Access CyberPanel: Log in to your CyberPanel dashboard and navigate to the "Websites" section, then "List Websites" sub-section.

2. Manage Git: Within specific website, go to the "Manage" section, then look for the "Manage Git" option and click on it.

3. Select Folder: Choose the appropriate folder where you want to deploy your frontend. This should be the location where your portfolio website is stored.

4. Pull Changes: Once you've selected the folder, click on the "Pull" button. This action will retrieve the latest changes from your GitHub repository and deploy them to the selected folder.

With both your frontend and backend deployed and operational, your full-stack contact form is almost ready for prime time. The final step involves a bit of troubleshooting and testing to ensure everything runs smoothly and efficiently.

<a id="Troubleshooting"></a>

## Troubleshooting

During the process of creating and deploying your full-stack contact form, you might encounter a few issues. Here are a couple of common challenges and their solutions that I came across:

- **Permission Denied Error with SSL Certificate:** If you encounter an EACCES (permission denied) error while using the SSL certificate, it's likely a file permission issue. To resolve this, navigate to the location of the key file (privkey.pem), and change its permissions using the following command:

```
CHMOD 744 privkey.pem
```

- **Auto-Reply Emails Going to Spam:** Sometimes, auto-reply messages can end up in recipients' spam folders. To mitigate this, I found that including an HTML version of the message (converted from the text version) and ensuring the "from" email in the transport variable matches can help which was already added to the backend code. Additionally, resources like these really helped figure it out:

  - **[Text to HMTL converter](https://www.textfixer.com/html/convert-text-html.php)**
  - **[This stack overflow really helped with the nodemailer issue](https://stackoverflow.com/questions/40608635/email-send-through-nodemailer-goes-into-spam-for-gmail)**
  - **[Test-mailer to see what security issues could appear](https://www.mail-tester.com/)**

<a id="Conclusion"></a>

## Conclusion

In conclusion, you've now gone through the process of creating, deploying, and troubleshooting your full-stack contact form. Let's recap:

- **Tutorial Recap:** You started by creating a sleek and functional frontend contact form using React and then moved on to setting up the backend using Node.js. The form's data is sent via a secure POST request to your backend, and an auto-reply message is sent to the user.

- **Error Handling and Security:** Throughout this journey, we've emphasized the importance of handling errors gracefully and prioritizing security. Properly handling errors and ensuring the secure transmission of data are critical aspects of any web application.

- **Experiment and Customize:** While this tutorial provides a solid foundation, don't hesitate to experiment and customize the code to match your specific needs. Every project is unique, and exploring different functionalities can be a great learning experience.

With your full-stack contact form up and running, you're now better equipped to enhance communication with visitors to your website or portfolio. As you continue to develop your skills, you'll find even more ways to leverage the power of full-stack development for creating engaging and dynamic web applications.

If you have any questions or if there are additional steps you'd like me to cover, please feel free to let me know. Happy coding!
