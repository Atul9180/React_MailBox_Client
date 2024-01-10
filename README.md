
## Demo Link: 

# MERN Authentication :
This is a starter app for a MERN stack application with authentication. This is for a SPA (Single Page Application) workflow that uses the [Vite](https://vite.dev) Build tool. 

<img width="960" height="550" alt="Screenshot 2024-01-10 220639" src="https://github.com/Atul9180/React_MailBox_Client/assets/110973046/1eb62925-85c2-402f-8ce6-821acee28500">

<img width="960" height="550" alt="Screenshot 2024-01-10 220803" src="https://github.com/Atul9180/React_MailBox_Client/assets/110973046/dc86e2c2-5a4e-4aad-b87f-174aa7495cba">

<img width="960" height="550" alt="Screenshot 2024-01-10 220823" src="https://github.com/Atul9180/React_MailBox_Client/assets/110973046/cb7de1f8-496e-4bbe-aa1c-c420c9b694eb">

<img width="960" height="550" alt="Screenshot 2024-01-10 221007" src="https://github.com/Atul9180/React_MailBox_Client/assets/110973046/4e3c9cd1-e0be-4f0b-a38e-b254ee9aff61">

It includes the following:

- Backend API with Express & MongoDB
- Routes for auth, logout, register, profile, update profile
- JWT authentication stored in HTTP-only cookie
- Protected routes and endpoints
- Custom middleware to check JSON web token and store in cookie
- Custom error middleware
- React frontend to register, login, logout, view profile, and update profile
- React Bootstrap UI library
- React Toastify notifications

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Run 

```

# Run client (:3000) & server (:5000)
npm run dev

# Run server only
npm run server
```

## Run server and client :

go to root directory in terminal :
```
npm run start
```
