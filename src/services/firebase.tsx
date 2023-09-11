import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import type { ReactNativeFirebase } from '@react-native-firebase/app';

const firebaseConfig: ReactNativeFirebase.FirebaseAppOptions = {
    apiKey: "AIzaSyCozHPS8C-BJ0LZeDwwiTDd6P1K6Gpgxic",
    authDomain: "reactnativefinalchallenge.firebaseapp.com",
    projectId: "reactnativefinalchallenge",
    storageBucket: "reactnativefinalchallenge.appspot.com",
    messagingSenderId: "704162118859",
    appId: "1:704162118859:web:36a1b7f541d8b3473d2f4e",
    measurementId: "G-LS6FQ1XTGS"
};

const app = initializeApp(firebaseConfig);

export const appAuth = getAuth(app);

