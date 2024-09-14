import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
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
const auth = getAuth();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signinForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Firebase sign-in method
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in successfully
                const user = userCredential.user;
                console.log("User signed in successfully:", user);
                
                // Redirect to user dashboard
                window.location.href = "../user_dashboard/user.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error during sign-in:", errorCode, errorMessage);
                alert(errorMessage); // Display an error message to the user
            });
    });
});
