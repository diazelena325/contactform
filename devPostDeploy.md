# Full Stack Contact Form Series: Deployment

## Getting Deployment ready

There are few additional details I added to get it ready for deployement like converting the backend from http to https for POST to work.

### Backend

We added the following to the backend code on server.js to convert from http to https.

A really good resource was: https://adamtheautomator.com/https-nodejs/

To configure an SSL certificate for our NodeJS HTTPS implementation, you can either use a public, trusted certificate or a self-signed certificate, or ssl certificate for the website on cyberpanel. This certificate will need to be stored on the root directory of cyberpanel and that directory location will be used to on the server.js code.

Install https package on terminal

```
npm i https
```

add the following at the top of the server.js file

```
const https = require('https');
```

The following code will be added to the end of the server.js file to create the https server. Now instead of app.listen to run the server, it will be the httpsServer

```
//Use this to change from http to https
const httpsServer = https.createServer(
	{
		key: fs.readFileSync(
			'../../../filelocation/privkey.pem'
		),
		cert: fs.readFileSync(
			'../../../filelocation/cert.pem'
		),
	},
	app
);

httpsServer.listen(serverPort, () =>
	console.log(`backend is running on port 5000`)
);

//comment out this line or remove it from the file
//app.listen(serverPort, () => console.log(`backend is running on port 5000`));
```

So the backend is now ready, we will need to change the fetch url in the frontend from http to https

### Frontend

Update API endpoint URLs in the React app if you changed the backend from http to https. Only change is adding the s to the url.

```
let response = await fetch('https://localhost:5000/send', {
```

Build the React application for production. I made a production specific folder outside from the dev folder. On package.json, add the build script. This script builds the react application, saves the build to the prod folder and removes it from the dev folder.

```
//using create-react-app
"build": "react-scripts build && XCOPY C:\\Dev\\contactform\\build\\\* C:\\Prod\\contactform_prod /s /y && RMDIR /s /q C:\\Dev\\contactform\\build",

//using nano-react-app
"build": "vite build && XCOPY C:\\Dev\\contactform\\build\\\* C:\\Prod\\contactform_prod /s /y && RMDIR /s /q C:\\Dev\\contactform\\build",
```

after saving that go to the terminal you will run the following

```
npm run build
```

## Deployment using github and cyberpanel

### Backend

Connected remotely to the cyberpanel server to the folder location where the portfolio website was store. this is where I created emailsvc folder outside the public_html folder and added the files for the backend which were only the following (don't import the node_modules folder, it will take a long time):
config.js
package-lock.json
package.json
server.js

On the terminal, go to the folder location and install packages. npm install should work since the dependencies are already on the package.json

```
// you can do either one of these
npm install

npm install express nodemailer cors https --save
```

In that same folder do npm run start to test backend that it is working.

### Keep the backend server running

Please note, this may only turn on the backend server while you are still remotely connected to the cyberpanel server. To have
it continue running this will need to be added before disconnectiong from host. PM2 was installed to manage all the backend services and keep them running. To get more information about pm2 go here: https://pm2.keymetrics.io/docs/usage/process-management/

On the terminal run the following to install:

```
npm install pm2 -g
```

Make sure all your backend services script start name is different, which is why we named ours mailstart

To run the service, you put:

```
pm2 start "npm run mailstart"
```

To Kill the service, you put to stop all or the id that shows up:

```
// use this to stop all backend services
pm2 stop all

// or use this to stop a specifc service based on the id
pm2 stop <id>
```

### Frontend

## Troubleshooting

I came across some issues:
issues with using the ssl certificate due to error EACCES: permission denied
We changed the permision of the key file
In the terminal, Went to the folder location of key.pem file (called privkey.pem)
and put the following:

```
CHMOD 744 privkey.pem
```

My Auto reply message was going to the recepients spam folder automatically
I added an html message that was the same as the text message, I converted it with this: https://www.textfixer.com/html/convert-text-html.php
and I added the from email on the transport variable that resolved the issue.

This stack overflow really helped: https://stackoverflow.com/questions/40608635/email-send-through-nodemailer-goes-into-spam-for-gmail

Also using test-mailer to see what other things could have an issue: https://www.mail-tester.com/

## Conclusion

Recap the steps covered in the tutorial
Emphasize the importance of error handling and security
Encourage experimentation and customization

if there are any others steps that you would like me to talk about please let me know.
