# MERN-Forum
I have made some changes from the original repo https://github.com/xrystalll/MERN-Forum
## Installation
- Clone and npm install backend and frontend(/client)

### Not needed as I've already set these values
- Fill environment (rename file `.env.development` to `.env`)
  - `PORT` - Express server port
  - `BACKEND` - The address where located backend
  - `CLIENT` - The address where located the react client. The backend and client must point to each other and can be the same if running on the same address
  - `MONGODB` - Your MongoDB url
  - `SECRET` - You can generate a secret key by execute the `/src/modules/utils/generate_keys.js` file in console

- Set backend address for client in file `/client/src/support/Constants.js`

## Launch
  - Go to the client folder `cd client`
  - Build client production build with the command `npm run build` or run with the command `npm start`
  - Run backend with the command `npm start` or in development mode `npm run dev`
