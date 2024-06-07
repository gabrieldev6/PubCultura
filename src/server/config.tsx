import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAWe5VC3QXeey2o7bT7VdD0Km9ExAzEszI",
    authDomain: "projcultura-383f3.firebaseapp.com",
    projectId: "projcultura-383f3",
    storageBucket: "projcultura-383f3.appspot.com",
    messagingSenderId: "86534552934",
    appId: "1:86534552934:web:3a64e36f4e3132f4da1ca7",
    measurementId: "G-5G3CTPLLK8"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);