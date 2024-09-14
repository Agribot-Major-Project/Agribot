
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyB2bZPb2C9fZRPvRQkTKyA8rBc4_c-X668",
    authDomain: "agribot-1417.firebaseapp.com",
    projectId: "agribot-1417",
    storageBucket: "agribot-1417.appspot.com",
    messagingSenderId: "306143786849",
    appId: "1:306143786849:web:967f3bbd544771f5d93720",
    measurementId: "G-DDSVXLXS51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Exporting auth so it can be used in other JS files
