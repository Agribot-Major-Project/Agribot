import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Firebase configuration (from your Firebase project settings)
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
const auth = getAuth();

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the register button
    const registerButton = document.querySelector(".btn.button2");

    // Add event listener for register button
    registerButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page reload
        
        // Get user details from the form
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;

        // Check if all fields are filled
        if (!email || !password || !name) {
            alert("Please fill in all fields.");
            return;
        }

        // Create user with Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User registered successfully
                const user = userCredential.user;
                alert("Registration successful! Redirecting to login page...");

                // Redirect to sign-in page
                window.location.href = "../signin_page/signin.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error registering user:", errorCode, errorMessage);
                alert(errorMessage); // Show error message
            });
    });
});
