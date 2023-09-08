import { initializeApp } from 'firebase/app';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCozHPS8C-BJ0LZeDwwiTDd6P1K6Gpgxic",
    authDomain: "reactnativefinalchallenge.firebaseapp.com",
    projectId: "reactnativefinalchallenge",
    storageBucket: "reactnativefinalchallenge.appspot.com",
    messagingSenderId: "704162118859",
    appId: "1:704162118859:web:36a1b7f541d8b3473d2f4e",
    measurementId: "G-LS6FQ1XTGS"
};

const firebaseApp = initializeApp(firebaseConfig);

// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

export default firebaseApp;