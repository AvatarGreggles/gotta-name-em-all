import React from "react";
import { FirebaseAppProvider } from "@use-firebase/app";
import { FirebaseAuthProvider } from "@use-firebase/auth";

import config from "./config";

const FirebaseApp = ({ children }) => (
  <FirebaseAppProvider config={config}>
    <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
  </FirebaseAppProvider>
);

export default FirebaseApp;
