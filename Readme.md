<h1 align="center">Richpanel Assignment</h1>
<div align="center">
Welcome to the Richpanel assignment documentation and codebase, before you get started please read the following instructions.
</div>

## Tech Stack Used
![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)
![Api](https://img.shields.io/badge/Api-4EA94B?style=for-the-badge&logo=api&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![Websockets](https://img.shields.io/badge/Websockets-4EA94B?style=for-the-badge&logo=websockets&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio-0078d7?style=for-the-badge&logo=visual%20studio&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🔑 Key Features
- Login using email and password or using Facebook.
- Chat with the customer support using websockets.
- Time stamp for the messages.

## 📚 Libraries Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Nodejs](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [MongoDB](https://www.mongodb.com/) - A general purpose, document-based, distributed database built for modern application developers and for the cloud era.
- [Bootstrap](https://getbootstrap.com/) - The world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
- [Websockets](https://www.npmjs.com/package/websockets) - A simple to use, blazing fast and thoroughly tested websocket client, server and console for node.js
- [Facebook](https://developers.facebook.com/) - Facebook for Developers provides tools and resources to develop, test, and distribute apps across platforms and devices.

## 📦 Getting Started
- So the codebase is divided into two parts, first part is for the FB CRM, and the other part is Messenger chat app, so carefully follow the instructions to run the codebase.

- Clone the repository:
```sh
git gh repo clone yasirmansoori/Richpanel_Assignment
```
- Navigate to the FB CRM Frontend directory:
```
cd Richpanel Assignment/client
``` 
- Navigate to the FB CRM Backend directory: 
```
cd Richpanel Assignment/server
```
- Navigate to the Messenger Chat App directory and then to the client directory:
```
cd Richpanel Assignment/Messenger/client
```
- Navigate to the Messenger Chat App directory and then to the server directory:
```
cd Richpanel Assignment/Messenger/server
```
- Install dependencies in all the directories:
```sh
 npm install
```
- Start the development server in all the directories:
```sh
  npm run dev
```

## 📝 Environment Variables

### For the FB CRM Backend

- Create a .env file in the root of the server directory and add the following environment variables:
```sh
CONNECTION_URI = "Your MongoDB Connection URI"
SECRET_KEY = "Your Secret Key"
ACCESS_TOKEN_SECRET = "Your Access Token Secret"
FACEBOOK_APP_ID = "Your Facebook App ID"
FACEBOOK_APP_SECRET = "Your Facebook App Secret"
```
## Note:
You can get the Facebook App ID and Facebook App Secret from the Facebook for Developers website.

## 🚀 Usage

```js
After running the development server, you can access the FB CRM at http://localhost:5174 and the Messenger Chat App at http://localhost:5173.
You should run 4 development servers in total, 2 for the FB CRM and 2 for the Messenger Chat App, yeah I know it's a bit complicated but it's worth it.
```

## 🌐 References
- https://developers.facebook.com/docs/messenger-platform/
- https://developers.facebook.com/docs/pages/
- https://developers.facebook.com/docs/facebook-login/

## *Improvements*
- [Webhooks](https://developers.facebook.com/docs/messenger-platform/webhook) - Linking of the webhooks to the facebook CRM can be implemented, I have not implemented it because it requires a public domain and a SSL certificate, I figured a way to do it with Ngrok but then to facebook developers api does not provide the access to this domain. As an alternative, I have implemented the websockets for the chat app.
- [Messenger Chat Plugin](https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin) - The Messenger Chat Plugin can be implemented in the CRM, but the problem I faced was that the plugin requires additional business verification and the domain should be public, so I have implemented the chat app using websockets.
- [Design](https://getbootstrap.com/) - The design of the CRM and the chat app can be made more attractive, I have not implemented it because I was restricted by the provided UI reference.
- [Deployment](https://www.netlify.com/) - The codebase can be deployed to any cloud platform, I have not deployed it because I faced various issues with the deployment, like the websockets not working, and the facebook login not working, given the restricted time, I have gone with local development servers.
<hr/>

[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDUuMTA0MTgzMTk3MDIxNDgiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMDUuMTA0MTgzMTk3MDIxNDggMzUiPjxyZWN0IHdpZHRoPSI2Mi42NTYyNTM4MTQ2OTcyNjYiIGhlaWdodD0iMzUiIGZpbGw9IiNmNWE2MjMiLz48cmVjdCB4PSI2Mi42NTYyNTM4MTQ2OTcyNjYiIHdpZHRoPSI2My45NzkxNzE3NTI5Mjk2OSIgaGVpZ2h0PSIzNSIgZmlsbD0iI2ZmZmZmZiIvPjx0ZXh0IHg9IjMxLjMyODEyNjkwNzM0ODYzMyIgeT0iMTcuNSIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IidSb2JvdG8nLCBzYW5zLXNlcmlmIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjIiPk1BREUgPC90ZXh0Pjx0ZXh0IHg9Ijk0LjY0NTgzOTY5MTE2MjExIiB5PSIxNy41IiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0iJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmIiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iOTAwIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjIiPldJVEg8L3RleHQ+PHJlY3QgeD0iMTI2LjYzNTQyNTU2NzYyNjk1IiB3aWR0aD0iNzguNDY4NzU3NjI5Mzk0NTMiIGhlaWdodD0iMzUiIGZpbGw9IiM3ZWQzMjEiLz48dGV4dCB4PSIxNjUuODY5ODA0MzgyMzI0MjIiIHk9IjE3LjUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtZmFtaWx5PSInUm9ib3RvJywgc2Fucy1zZXJpZiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjUwMCIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIyIj5MT1ZF4p2k77iPPC90ZXh0Pjwvc3ZnPg==)](https://forthebadge.com)