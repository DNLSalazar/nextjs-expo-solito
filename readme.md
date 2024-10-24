# Solito + Expo Router + Nativewind Monorepo

## Steps to run

In the root directory, run `yarn install` to install all dependencies.

### Running DB
- Start docker (or docker desktop).
- In the project root directory, run `yarn db` to run the DB container
- If it's the first time running the the DB containe, you can run `yarn db-migrate` to sync the schema with the container db.

### Running NextJs
- Make sure `server` in `./packages/app/config/constants.ts` is set to your LAN IP, it should be something like `192.168.1.14`, in windows you can simply run `ipconfig` in your terminal and look at the IPv4 Address of the adapter you're using.
- In the project root directory, run `yarn web`.
- For now, due to CORS problems, open your browser and go to `http://<your LAN IP>:3000/`.

### Running Mobile Application
- Make sure `server` in `./packages/app/config/constants.ts` is set to your LAN IP, it should be something like `192.168.1.14`, in windows you can simply run `ipconfig` in your terminal and look at the IPv4 Address of the adapter you're using.
- In the project root directory, run `yarn native`.
- On the target device, make sure you have `Expo go` installed. If it is an emulator, press `a` in the terminal where you're runnign `yarn native` to install `Expo Go` in your device.
- If you have `Expo Go` installed and the application is not running, go to expo go and enter the address that `yarn native` shows in the terminal.

When you're done working, remember to run `yarn db-down` to stop the db container.

## Project structure

The project have 3 important directories:

- `./packages/app/` For the main logic for the frontend (Mobile and web) and UI and Components.
- `./apps/next/` For the NextJs application, it includes the server and the routing for the web application.
- `./apps/expo/` For the React Native Application, used mainly for routing.
