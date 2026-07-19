import { db } from "./firebase-config.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";



window.loginUser = async function () {

    // Get User ID and Password

    const userId = document
        .getElementById("userId")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value
        .trim();


    // Check Empty Fields

    if (!userId || !password) {

        alert("Please enter User ID and Password.");

        return;

    }


    try {

        // Search users collection

        const userRef = doc(db, "users", userId);

        const userSnapshot = await getDoc(userRef);


        // User Exists?

        if (!userSnapshot.exists()) {

            alert("Invalid User ID.");

            return;

        }


        // Get User Data

        const userData = userSnapshot.data();


        // Password Validation

        if (userData.password !== password) {

            alert("Invalid Password.");

            return;

        }


        // Status Validation

        if (userData.status !== "active") {

            alert("Your account is inactive.");

            return;

        }


        // Role Validation

        const role = userData.role;


        // Redirect Based on Role

        if (role === "admin") {

            window.location.href = "admin-dashboard.html";

        }

        else if (role === "faculty") {

            window.location.href = "faculty-dashboard.html";

        }

        else if (role === "student") {

            window.location.href = "student-dashboard.html";

        }

        else {

            alert("Invalid Role.");

        }

    }

    catch (error) {

        console.error("Login Error :", error);

        alert("Something went wrong.");

    }

};